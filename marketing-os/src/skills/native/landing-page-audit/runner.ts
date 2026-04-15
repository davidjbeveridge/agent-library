import { createNativeSkill } from '../common.js';

export const landingPageAuditSkill = createNativeSkill({
  id: 'landing-page-audit',
  purpose: 'Audit a page or page copy for friction, clarity gaps, CTA issues, trust gaps, and experiments.',
  taskTypesSupported: ['landing-page-audit'],
  buildContent: (context, goal) => ({
    title: 'Landing Page Audit',
    content:
      '# Landing Page Audit\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Current CTAs: ' + ((context.currentCTAs ?? ['Undocumented']).join('; ')) + '\nTrust signals: ' + ((context.trustSignals ?? ['Undocumented']).join('; ')) + '\nKnown bottlenecks: ' + ((context.knownBottlenecks ?? ['Undocumented']).join('; ')) + '\n\nAudit priorities:\n- Clarify the main promise and next step.\n- Remove friction near the CTA.\n- Add proof where buyer doubt is highest.'
  })
});
