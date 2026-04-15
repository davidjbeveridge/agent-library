import { createNativeSkill } from '../common.js';

export const nextStepPrioritizerSkill = createNativeSkill({
  id: 'next-step-prioritizer',
  purpose: 'Rank next actions by leverage, confidence, dependency readiness, and business readiness.',
  taskTypesSupported: ['next-step-prioritization'],
  buildContent: (context, goal) => ({
    title: 'Next Step Prioritizer',
    content:
      '# Next Step Prioritizer\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Goals: ' + ((context.primaryGoals ?? ['Undocumented']).join('; ')) + '\n' +
      'Missing capabilities: ' + ((context.missingCapabilities ?? ['Undocumented']).join('; ')) + '\n\n' +
      'Prioritization rules:\n' +
      '- Prefer actions that match business readiness and current evidence quality.\n' +
      '- Defer expensive or tool-dependent work when prerequisites are missing.\n' +
      '- Surface setup suggestions when a missing capability would materially improve output.'
  })
});
