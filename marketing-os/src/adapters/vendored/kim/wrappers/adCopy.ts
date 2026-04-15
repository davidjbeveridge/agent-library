import { createVendoredWrapper } from '../../common.js';

export const adCopyWrapper = createVendoredWrapper({
  id: 'kim-ad-copy',
  sourceDependency: 'realkimbarrett-advertising-skills',
  purpose: 'Draft direct-response ad copy directions.',
  taskTypesSupported: ['paid-acquisition', 'social-execution'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['asset'],
  strengthScore: 8,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/copy-chief/headline-matrix/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Ad copy directions',
    content: `# Ad Copy Directions\n\nGoal: ${goal}\n\nClaims: ${(context.claims ?? ['Undocumented']).join('; ')}\nProof points: ${(context.proofPoints ?? ['Undocumented']).join('; ')}\n\nCopy rules:\n- Use simple buyer language before clever phrasing.\n- Pair each strong claim with proof or caveat.\n- Keep hooks specific to the segment’s pains and outcomes.`
  })
});
