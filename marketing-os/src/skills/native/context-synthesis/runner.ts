import { createNativeSkill } from '../common.js';

export const contextSynthesisSkill = createNativeSkill({
  id: 'context-synthesis',
  purpose: 'Turn raw business input into normalized marketing context.',
  taskTypesSupported: ['context-synthesis'],
  buildContent: (context, goal) => ({
    title: 'Context Synthesis',
    content:
      '# Context Synthesis\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Primary goals: ' + ((context.primaryGoals ?? ['Clarify primary goals']).join('; ')) + '\nBusiness model: ' + (context.businessModel ?? 'unknown') + '\n\nRecommendations:\n- Normalize audience, offer, and channel data into the shared schema.\n- Record open questions and assumptions explicitly.\n- Preserve provenance for each major context element.'
  })
});
