import { createNativeSkill } from '../common.js';

export const audienceResearchSynthesisSkill = createNativeSkill({
  id: 'audience-research-synthesis',
  purpose: 'Produce ICPs, personas, pains, objections, and buying triggers.',
  taskTypesSupported: ['audience-research'],
  buildContent: (context, goal) => ({
    title: 'Audience Research Synthesis',
    content:
      '# Audience Research Synthesis\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'ICPs: ' + ((context.ICPs ?? ['Undocumented']).join('; ')) + '\nPains: ' + ((context.pains ?? ['Undocumented']).join('; ')) + '\nBuying triggers: ' + ((context.buyingTriggers ?? ['Undocumented']).join('; ')) + '\n\nRecommendations:\n- Focus on the highest-urgency segment first.\n- Translate generic personas into problem-and-trigger based segments.\n- Pair each segment with likely objections and desired outcomes.'
  })
});
