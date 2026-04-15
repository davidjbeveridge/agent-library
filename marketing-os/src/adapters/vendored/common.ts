import path from 'node:path';
import type { MarketingContext } from '../../core/context/contextSchema.js';
import type { VendoredDependencyId, VendoredSkillWrapper, WrapperExecutionResult } from '../../core/types/dependencies.js';
import { redactContextForVendoredSkill } from '../../core/safety/trustBoundaries.js';

export interface WrapperTemplateConfig {
  id: string;
  sourceDependency: VendoredDependencyId;
  purpose: string;
  taskTypesSupported: VendoredSkillWrapper['taskTypesSupported'];
  businessModelsSupported: VendoredSkillWrapper['businessModelsSupported'];
  requiresTools?: string[];
  optionalTools?: string[];
  outputKinds: VendoredSkillWrapper['outputKinds'];
  strengthScore: number;
  executionReadinessRules: string[];
  playbookPath: string;
  formatter: (context: MarketingContext, goal: string) => { title: string; content: string };
}

export function createVendoredWrapper(config: WrapperTemplateConfig): VendoredSkillWrapper {
  return {
    id: config.id,
    sourceDependency: config.sourceDependency,
    purpose: config.purpose,
    taskTypesSupported: config.taskTypesSupported,
    businessModelsSupported: config.businessModelsSupported,
    requiresTools: config.requiresTools ?? [],
    optionalTools: config.optionalTools ?? [],
    outputKinds: config.outputKinds,
    strengthScore: config.strengthScore,
    executionReadinessRules: config.executionReadinessRules,
    async run(context, goal): Promise<WrapperExecutionResult> {
      const safeContext = redactContextForVendoredSkill(context);
      const formatted = config.formatter(safeContext, goal);
      const playbookLocation = path.posix.join(config.sourceDependency, 'snapshot', config.playbookPath);
      return {
        summary: formatted.title,
        artifacts: [
          {
            id: `${config.id}-artifact`,
            kind: config.outputKinds[0],
            title: formatted.title,
            content: formatted.content,
            format: 'markdown'
          }
        ],
        provenance: [
          {
            producer: config.id,
            sourceType: 'vendored-wrapper',
            sourceId: playbookLocation,
            generatedAt: new Date().toISOString(),
            notes: 'Structured through a local wrapper. Raw vendored content was not invoked directly.'
          }
        ],
        confidenceNotes: [`${config.id} uses vendored guidance via ${playbookLocation}.`]
      };
    }
  };
}
