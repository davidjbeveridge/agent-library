import path from 'node:path';
import { buildMarketingContext, updateMarketingContext } from '../context/contextBuilder.js';
import type { MarketingContext } from '../context/contextSchema.js';
import { ContextStore } from '../context/contextStore.js';
import { CapabilityDetector } from '../capability/capabilityDetector.js';
import { evaluatePolicyRisks } from '../safety/policyChecks.js';
import { validateOutputs } from '../safety/outputValidation.js';
import { deriveIterationActions } from './iterationLoop.js';
import { routeTask } from './routing.js';
import type { CapabilityReport, NativeSkillRunner, VendoredSkillWrapper } from '../types/dependencies.js';
import type { OrchestratorResult } from '../types/outputs.js';
import type { TaskRequest } from '../types/tasks.js';
import { RecommendationsStore } from '../state/recommendationsStore.js';

export interface OrchestratorRequest {
  context?: MarketingContext;
  task: TaskRequest;
}

export class MarketingOrchestrator {
  private readonly contextStore: ContextStore;
  private readonly recommendationsStore: RecommendationsStore;

  constructor(
    private readonly projectRoot: string,
    private readonly wrappers: VendoredSkillWrapper[],
    private readonly nativeSkills: NativeSkillRunner[],
    private readonly capabilityDetector: CapabilityDetector
  ) {
    this.contextStore = new ContextStore(path.join(projectRoot, '.data/contexts'));
    this.recommendationsStore = new RecommendationsStore(path.join(projectRoot, '.data'), 'recommendations');
  }

  async initializeContext(seed: Parameters<typeof buildMarketingContext>[0]): Promise<MarketingContext> {
    const context = buildMarketingContext(seed);
    await this.contextStore.save(context);
    return context;
  }

  async runTask(request: OrchestratorRequest): Promise<OrchestratorResult> {
    const context = request.context ?? (await this.contextStore.load(request.task.id)) ?? buildMarketingContext({ projectId: request.task.id, primaryGoal: request.task.goal });
    const capabilityReport = await this.capabilityDetector.detect();
    const routingDecision = await routeTask(this.projectRoot, request.task, capabilityReport, this.wrappers, this.nativeSkills);
    const results = [] as Awaited<ReturnType<VendoredSkillWrapper['run']>>[];

    for (const id of routingDecision.chosen) {
      const wrapper = this.wrappers.find((item) => item.id === id);
      if (wrapper) {
        results.push(await wrapper.run(context, request.task.goal));
        continue;
      }
      const nativeSkill = this.nativeSkills.find((item) => item.id === id);
      if (nativeSkill) {
        results.push(await nativeSkill.run(context, request.task.goal));
      }
    }

    const artifacts = results.flatMap((result) => result.artifacts);
    const validation = validateOutputs(artifacts);
    const nextActions = deriveIterationActions(context);
    const policyRisks = evaluatePolicyRisks(context, nextActions);
    const output: OrchestratorResult = {
      summary: results.map((result) => result.summary).join(' | ') || `No runner available for ${request.task.taskType}.`,
      assumptions: context.assumptions ?? [],
      chosenPath: routingDecision.chosen,
      evidenceBasis: [
        {
          summary: `Task ${request.task.taskType} executed in ${capabilityReport.executionMode}.`,
          sourceIds: (context.sourceReferences ?? []).map((source) => source.id),
          strength: context.evidenceQuality ?? 'low',
          gaps: context.openQuestions
        }
      ],
      artifacts,
      risks: [...validation.risks, ...policyRisks],
      nextActions: [...new Set([...(context.nextRecommendedActions ?? []), ...nextActions])],
      setupSuggestions: capabilityReport.recommendedSetups.map((benefit, index) => ({
        capability: `setup-${index + 1}`,
        benefit,
        setupHint: benefit
      })),
      provenance: results.flatMap((result) => result.provenance),
      confidence: [
        ...(context.confidenceScores ?? []),
        {
          topic: request.task.taskType,
          level: capabilityReport.executionMode === 'MODE_MINIMAL' ? 'low' : 'medium',
          rationale: routingDecision.rationale
        }
      ]
    };

    const updatedContext = updateMarketingContext(context, {
      projectId: context.projectId,
      vendoredSkillAvailability: Object.fromEntries(capabilityReport.vendored.map((item) => [item.id, Boolean(item.manifestValid && item.enabled)])),
      externalToolAvailability: Object.fromEntries(capabilityReport.tools.map((item) => [item.id, item.available && item.healthy])),
      executionModes: [capabilityReport.executionMode],
      missingCapabilities: capabilityReport.missingCapabilities,
      recommendedSetups: capabilityReport.recommendedSetups,
      nextRecommendedActions: output.nextActions,
      notes: [routingDecision.rationale]
    });

    await this.contextStore.save(updatedContext);
    await this.recommendationsStore.save(`${updatedContext.projectId}-${request.task.id}`, output as unknown as Record<string, unknown>);
    return output;
  }

  async detectCapabilities(): Promise<CapabilityReport> {
    return this.capabilityDetector.detect();
  }
}
