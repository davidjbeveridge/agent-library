import { createVendoredWrapper } from '../../common.js';

export const offerWrapper = createVendoredWrapper({
  id: 'kim-offer',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Refine the offer and why it converts.',
  taskTypesSupported: ['positioning', 'paid-acquisition'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['brief'],
  strengthScore: 9,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/foundations/offer-extraction/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Offer extraction brief',
    content: `# Offer Brief\n\nGoal: ${goal}\n\nPrimary offer: ${context.primaryOffer?.name ?? 'Undocumented'}\nObjections: ${(context.objections ?? ['Undocumented']).join('; ')}\n\nOffer checks:\n- Make the value exchange concrete.\n- Reduce friction or ambiguity around what the buyer gets next.\n- Tie risk reversal and proof to the main objection.`
  })
});
