import { createNativeSkill } from '../common.js';

export const experimentBacklogSkill = createNativeSkill({
  id: 'experiment-backlog',
  purpose: 'Produce prioritized hypotheses and experiment ideas.',
  taskTypesSupported: ['experiment-backlog'],
  buildContent: (context, goal) => ({
    title: 'Experiment Backlog',
    content:
      '# Experiment Backlog\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Primary goals: ' + ((context.primaryGoals ?? ['Undocumented']).join('; ')) + '\nExperiments already tracked: ' + String((context.experiments ?? []).length) + '\n\nBacklog rules:\n- Prioritize high-leverage changes with clear success criteria.\n- Avoid scaling suggestions when funnel readiness is unclear.\n- Tie each experiment to a known bottleneck or key assumption.'
  })
});
