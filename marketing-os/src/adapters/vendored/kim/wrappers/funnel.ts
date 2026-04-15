import { createVendoredWrapper } from '../../common.js';

export const funnelWrapper = createVendoredWrapper({
  id: 'kim-funnel',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Tighten conversion paths for campaign traffic.',
  taskTypesSupported: ['landing-page-audit', 'experiment-backlog'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['plan'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/operator-os/conversion-path-builder/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Conversion path builder notes',
    content: `# Conversion Path\n\nGoal: ${goal}\n\nFunnel stages: ${(context.funnelStages ?? ['Undocumented']).join('; ')}\nKnown bottlenecks: ${(context.knownBottlenecks ?? ['Undocumented']).join('; ')}\n\nRecommendations:\n- Keep one clear next step per traffic segment.\n- Match landing page promise to campaign angle with minimal semantic drift.\n- Add a short validation loop before wider spend or rollout.`
  })
});
