import type { MarketingContext } from '../../core/context/contextSchema.js';
import type { NativeSkillRunner, WrapperExecutionResult } from '../../core/types/dependencies.js';
import type { TaskType } from '../../core/types/tasks.js';

interface NativeSkillConfig {
  id: string;
  purpose: string;
  taskTypesSupported: TaskType[];
  buildContent: (context: MarketingContext, goal: string) => { title: string; content: string };
}

export function createNativeSkill(config: NativeSkillConfig): NativeSkillRunner {
  return {
    id: config.id,
    purpose: config.purpose,
    taskTypesSupported: config.taskTypesSupported,
    async run(context, goal): Promise<WrapperExecutionResult> {
      const content = config.buildContent(context, goal);
      return {
        summary: content.title,
        artifacts: [
          {
            id: `${config.id}-artifact`,
            kind: 'brief',
            title: content.title,
            content: content.content,
            format: 'markdown'
          }
        ],
        provenance: [
          {
            producer: config.id,
            sourceType: 'native-skill',
            sourceId: config.id,
            generatedAt: new Date().toISOString()
          }
        ],
        confidenceNotes: [`${config.id} ran in native fallback mode.`]
      };
    }
  };
}
