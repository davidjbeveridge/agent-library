import { createVendoredWrapper } from '../../common.js';

export const contentWrapper = createVendoredWrapper({
  id: 'kostja-content',
  sourceDependency: 'kostja94-marketing-skills',
  purpose: 'Generate content system and brief directions.',
  taskTypesSupported: ['seo-content', 'social-execution'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['brief'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/content/article/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Content system notes',
    content: `# Content System\n\nGoal: ${goal}\n\nOwned assets: ${(context.ownedAssets ?? ['Undocumented']).join('; ')}\nMessaging by stage: ${Object.keys(context.messagingByStage ?? {}).join('; ') || 'Undocumented'}\n\nRecommendations:\n- Match asset format to buyer stage and channel context.\n- Reuse positioning and proof points across article, page, and social variants.\n- Prioritize assets that compound into better landing pages and distribution.`
  })
});
