import { createVendoredWrapper } from '../../common.js';

export const productMarketingContextWrapper = createVendoredWrapper({
  id: 'corey-product-marketing-context',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Build product marketing context and strategy framing.',
  taskTypesSupported: ['context-synthesis', 'positioning'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['brief'],
  strengthScore: 9,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/product-marketing-context/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Product marketing context brief',
    content: `# Product Marketing Context\n\nGoal: ${goal}\n\nProject: ${context.projectName ?? context.projectId}\n\nPositioning anchors:\n- Category: ${context.category ?? 'Not yet defined'}\n- Differentiation: ${(context.differentiation ?? ['Clarify key differentiators']).join('; ')}\n- Primary jobs: ${(context.jobsToBeDone ?? ['Clarify core jobs to be done']).join('; ')}\n\nRecommended strategic focus:\n- Clarify the problem/solution fit before channel expansion.\n- Align messaging to the strongest buyer pains and desired outcomes.\n- Use proof points and trust signals before scaling acquisition.`
  })
});
