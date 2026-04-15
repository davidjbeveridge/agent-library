import { createVendoredWrapper } from '../../common.js';

export const objectionsWrapper = createVendoredWrapper({
  id: 'kim-objections',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Surface and respond to buyer objections.',
  taskTypesSupported: ['audience-research', 'landing-page-audit'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['report'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/copy-chief/objection-crusher/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Objection map',
    content: `# Objection Map\n\nGoal: ${goal}\n\nKnown objections: ${(context.objections ?? ['Undocumented']).join('; ')}\nTrust signals: ${(context.trustSignals ?? ['Undocumented']).join('; ')}\n\nRecommended response strategy:\n- Put the hardest objection in plain language.\n- Answer it with proof, mechanism, or risk reversal.\n- Rework CTA copy if the CTA skips over the buyer’s main hesitation.`
  })
});
