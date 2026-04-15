import { createVendoredWrapper } from '../../common.js';

export const avatarWrapper = createVendoredWrapper({
  id: 'kim-avatar',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Sharpen target avatar understanding for direct response work.',
  taskTypesSupported: ['audience-research', 'paid-acquisition'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['brief'],
  strengthScore: 9,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/foundations/avatar-extraction/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Avatar extraction notes',
    content: `# Avatar Notes\n\nGoal: ${goal}\n\nICPs: ${(context.ICPs ?? ['Not yet defined']).join('; ')}\nPersonas: ${(context.personas ?? []).map((persona) => persona.name).join('; ') || 'Not yet defined'}\n\nDirect-response focus:\n- Isolate the highest-pain segment first.\n- Translate vague audience labels into trigger-specific buyer language.\n- Prioritize segments closest to action, not just awareness.`
  })
});
