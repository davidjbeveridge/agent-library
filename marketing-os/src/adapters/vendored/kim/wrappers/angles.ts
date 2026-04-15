import { createVendoredWrapper } from '../../common.js';

export const anglesWrapper = createVendoredWrapper({
  id: 'kim-angles',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Generate campaign angles and hooks.',
  taskTypesSupported: ['paid-acquisition', 'seo-content'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['backlog'],
  strengthScore: 9,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/operator-os/ad-angle-multiplier/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Angle matrix',
    content: `# Angle Matrix\n\nGoal: ${goal}\n\nDesired outcomes: ${(context.desiredOutcomes ?? ['Undocumented']).join('; ')}\nUnique mechanism: ${context.uniqueMechanism ?? 'Undocumented'}\n\nSuggested angle lanes:\n- Pain-first angle anchored in the most urgent buying trigger.\n- Mechanism-first angle that explains why this works differently.\n- Outcome-plus-proof angle that pairs promise with trust signal.`
  })
});
