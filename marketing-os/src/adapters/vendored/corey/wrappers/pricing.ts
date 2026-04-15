import { createVendoredWrapper } from '../../common.js';

export const pricingWrapper = createVendoredWrapper({
  id: 'corey-pricing',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Evaluate pricing strategy and packaging clarity.',
  taskTypesSupported: ['positioning', 'next-step-prioritization'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'agency', 'b2b-service', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['brief'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/pricing-strategy/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Pricing strategy notes',
    content: `# Pricing Strategy\n\nGoal: ${goal}\n\nPricing model: ${context.pricingModel ?? 'Undocumented'}\nPrice points: ${(context.pricePoints ?? ['Undocumented']).join('; ')}\nPackaging: ${context.packaging ?? 'Undocumented'}\n\nChecks:\n- Ensure packaging reflects different buyer maturity or usage needs.\n- Remove unnecessary complexity before adding more plan tiers.\n- Tie proof points to the value metric the buyer actually cares about.`
  })
});
