import { createNativeSkill } from '../common.js';

export const positioningBriefSkill = createNativeSkill({
  id: 'positioning-brief',
  purpose: 'Produce category framing, differentiation, proof points, and messaging strategy.',
  taskTypesSupported: ['positioning'],
  buildContent: (context, goal) => ({
    title: 'Positioning Brief',
    content:
      '# Positioning Brief\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Category: ' + (context.category ?? 'Undocumented') + '\nDifferentiation: ' + ((context.differentiation ?? ['Undocumented']).join('; ')) + '\nProof points: ' + ((context.proofPoints ?? ['Undocumented']).join('; ')) + '\n\nRecommendations:\n- State what the product is, who it is for, and why it is different.\n- Anchor claims to proof points and trust signals.\n- Prefer clear category language over novel but confusing labels.'
  })
});
