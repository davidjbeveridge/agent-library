import { createVendoredWrapper } from '../../common.js';

export const seoWrapper = createVendoredWrapper({
  id: 'kostja-seo',
  sourceDependency: 'kostja94-marketing-skills',
  purpose: 'Build broad SEO and search capture plans.',
  taskTypesSupported: ['seo-content', 'competitor-research'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['plan'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/seo/content/content-strategy/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Broad SEO strategy',
    content: `# SEO Strategy\n\nGoal: ${goal}\n\nCategory: ${context.category ?? 'Undocumented'}\nAlternatives: ${(context.alternatives ?? ['Undocumented']).join('; ')}\n\nPlan:\n- Cover category, comparison, use-case, and alternatives demand separately.\n- Build internal linking around funnel stage and search intent.\n- Use page types that match the commercial model instead of generic blog-only output.`
  })
});
