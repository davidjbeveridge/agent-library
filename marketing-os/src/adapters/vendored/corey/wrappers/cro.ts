import { createVendoredWrapper } from '../../common.js';

export const croWrapper = createVendoredWrapper({
  id: 'corey-cro',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Audit funnel friction and conversion rate risks.',
  taskTypesSupported: ['landing-page-audit', 'experiment-backlog'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['report'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/page-cro/SKILL.md',
  formatter: (context, goal) => ({
    title: 'CRO audit notes',
    content: `# CRO Audit\n\nGoal: ${goal}\n\nKnown bottlenecks: ${(context.knownBottlenecks ?? ['No bottlenecks captured yet']).join('; ')}\nCurrent CTAs: ${(context.currentCTAs ?? ['No CTAs captured']).join('; ')}\n\nPriority fixes:\n- Reduce friction in the primary CTA path.\n- Strengthen trust and proof near the conversion moment.\n- Align page copy to the dominant buyer objection and buying trigger.`
  })
});
