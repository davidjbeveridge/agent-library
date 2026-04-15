import { createNativeSkill } from '../common.js';

export const adAngleGeneratorSkill = createNativeSkill({
  id: 'ad-angle-generator',
  purpose: 'Produce hooks, angles, offers, and testing matrices without dependencies.',
  taskTypesSupported: ['paid-acquisition'],
  buildContent: (context, goal) => ({
    title: 'Ad Angle Generator',
    content:
      '# Ad Angle Generator\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Desired outcomes: ' + ((context.desiredOutcomes ?? ['Undocumented']).join('; ')) + '\nObjections: ' + ((context.objections ?? ['Undocumented']).join('; ')) + '\n\nAngle rules:\n- Build angles from pains, outcomes, mechanism, and proof.\n- Generate a mix of safe and sharper tests without using deceptive tactics.\n- Keep claims supportable by existing proof.'
  })
});
