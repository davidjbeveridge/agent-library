import { createNativeSkill } from '../common.js';

export const reportingSummarySkill = createNativeSkill({
  id: 'reporting-summary',
  purpose: 'Summarize current state, learnings, and next steps.',
  taskTypesSupported: ['reporting-summary'],
  buildContent: (context, goal) => ({
    title: 'Reporting Summary',
    content:
      '# Reporting Summary\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Results: ' + ((context.results ?? ['Undocumented']).join('; ')) + '\nLearnings: ' + ((context.learnings ?? ['Undocumented']).join('; ')) + '\nNext actions: ' + ((context.nextRecommendedActions ?? ['Undocumented']).join('; ')) + '\n\nReporting rules:\n- Separate facts from interpretation.\n- Call out evidence gaps directly.\n- End with the smallest useful next actions.'
  })
});
