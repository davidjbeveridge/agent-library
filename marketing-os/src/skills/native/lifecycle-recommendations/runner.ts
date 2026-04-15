import { createNativeSkill } from '../common.js';

export const lifecycleRecommendationsSkill = createNativeSkill({
  id: 'lifecycle-recommendations',
  purpose: 'Generate onboarding, nurture, retention, upsell, and churn reduction suggestions.',
  taskTypesSupported: ['lifecycle'],
  buildContent: (context, goal) => ({
    title: 'Lifecycle Recommendations',
    content:
      '# Lifecycle Recommendations\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Onboarding model: ' + (context.onboardingModel ?? 'Undocumented') + '\nRetention model: ' + (context.retentionModel ?? 'Undocumented') + '\n\nLifecycle rules:\n- Reduce time-to-value first.\n- Trigger lifecycle messages from real milestones where possible.\n- Treat retention as product value delivery plus communication quality.'
  })
});
