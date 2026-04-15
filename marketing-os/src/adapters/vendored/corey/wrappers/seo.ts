import { createVendoredWrapper } from '../../common.js';

export const seoWrapper = createVendoredWrapper({
  id: 'corey-seo',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Structure SEO opportunities and content strategy.',
  taskTypesSupported: ['seo-content', 'competitor-research'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['plan'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/seo-audit/SKILL.md',
  formatter: (context, goal) => ({
    title: 'SEO opportunity plan',
    content: `# SEO Plan\n\nGoal: ${goal}\n\nCurrent channels: ${(context.currentChannels ?? ['Not documented']).join('; ')}\nOwned assets: ${(context.ownedAssets ?? ['Not documented']).join('; ')}\n\nFocus areas:\n- Build search demand capture around high-intent problem and comparison topics.\n- Connect content to the funnel stages that already exist.\n- Use proof-driven pages for alternatives, use cases, and category terms.`
  })
});
