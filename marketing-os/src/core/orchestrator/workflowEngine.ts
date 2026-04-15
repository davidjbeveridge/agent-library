import type { MarketingOrchestrator } from './MarketingOrchestrator.js';
import type { TaskRequest } from '../types/tasks.js';
import type { OrchestratorResult } from '../types/outputs.js';
import type { MarketingContext } from '../context/contextSchema.js';

export interface WorkflowDefinition {
  id: string;
  title: string;
  description: string;
  defaultBusinessModel: MarketingContext['businessModel'];
  steps: TaskRequest[];
}

export async function runWorkflow(
  orchestrator: MarketingOrchestrator,
  workflow: WorkflowDefinition,
  context: MarketingContext
): Promise<{ workflow: WorkflowDefinition; results: OrchestratorResult[] }> {
  const results: OrchestratorResult[] = [];
  for (const step of workflow.steps) {
    const result = await orchestrator.runTask({ context, task: step });
    results.push(result);
  }
  return { workflow, results };
}
