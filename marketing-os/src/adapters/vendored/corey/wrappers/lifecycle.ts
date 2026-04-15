import { createVendoredWrapper } from '../../common.js';

export const lifecycleWrapper = createVendoredWrapper({
  id: 'corey-lifecycle',
  sourceDependency: 'coreyhaines31-marketingskills',
  purpose: 'Recommend onboarding, nurture, and churn reduction changes.',
  taskTypesSupported: ['lifecycle', 'reporting-summary'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['recommendation'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/churn-prevention/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Lifecycle recommendations',
    content: `# Lifecycle Recommendations\n\nGoal: ${goal}\n\nOnboarding model: ${context.onboardingModel ?? 'Undocumented'}\nRetention model: ${context.retentionModel ?? 'Undocumented'}\n\nRecommendations:\n- Shorten time-to-value in the onboarding path.\n- Trigger nurture messages from observed product or funnel milestones.\n- Treat churn risks as messaging and activation problems before discounting.`
  })
});
