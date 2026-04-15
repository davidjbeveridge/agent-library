import { createNativeSkill } from '../common.js';

export const competitorResearchSynthesisSkill = createNativeSkill({
  id: 'competitor-research-synthesis',
  purpose: 'Synthesize competitors and alternatives from available evidence.',
  taskTypesSupported: ['competitor-research'],
  buildContent: (context, goal) => ({
    title: 'Competitor Research Synthesis',
    content:
      '# Competitor Research Synthesis\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Competitors: ' + (((context.competitors ?? []).map((item) => item.name).join('; ')) || 'Undocumented') + '\nAlternatives: ' + ((context.alternatives ?? ['Undocumented']).join('; ')) + '\n\nRecommendations:\n- Separate direct competitors from alternative ways the buyer solves the problem.\n- Focus on differentiators that matter at buying time.\n- Mark unknown competitor data as evidence gaps.'
  })
});
