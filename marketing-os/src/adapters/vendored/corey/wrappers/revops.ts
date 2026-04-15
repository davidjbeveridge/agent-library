import { createVendoredWrapper } from '../../common.js';

export const revopsWrapper = createVendoredWrapper({
  id: 'corey-revops',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Align funnel, sales motion, and reporting decisions.',
  taskTypesSupported: ['reporting-summary', 'next-step-prioritization'],
  businessModelsSupported: ['saas', 'plg', 'agency', 'b2b-service', 'developer-tools', 'open-source-hybrid', 'unknown'],
  outputKinds: ['report'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/revops/SKILL.md',
  formatter: (context, goal) => ({
    title: 'RevOps alignment summary',
    content: `# RevOps Summary\n\nGoal: ${goal}\n\nSales motion: ${context.salesMotion ?? 'Undocumented'}\nFunnel stages: ${(context.funnelStages ?? ['Undocumented']).join('; ')}\n\nRecommended alignment:\n- Keep lifecycle definitions consistent across marketing, product, and sales.\n- Close instrumentation gaps before relying on lagging outcome metrics.\n- Tie recommendations to a KPI tree by business model.`
  })
});
