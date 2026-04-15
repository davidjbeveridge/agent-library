import { createVendoredWrapper } from '../../common.js';

export const pageTypesWrapper = createVendoredWrapper({
  id: 'kostja-page-types',
  sourceDependency: 'kostja94-marketing-skills',
  purpose: 'Recommend marketing page types and structures.',
  taskTypesSupported: ['landing-page-audit', 'seo-content'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['plan'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/pages/marketing/landing-page/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Marketing page type recommendations',
    content: `# Page Types\n\nGoal: ${goal}\n\nCurrent channels: ${(context.currentChannels ?? ['Undocumented']).join('; ')}\nCurrent CTAs: ${(context.currentCTAs ?? ['Undocumented']).join('; ')}\n\nPage recommendations:\n- Separate demand capture pages from persuasion-heavy landing pages.\n- Use alternatives, solutions, and use-case pages where differentiation matters.\n- Keep page structure aligned to the buyer’s awareness stage.`
  })
});
