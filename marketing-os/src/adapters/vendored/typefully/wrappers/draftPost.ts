import { createVendoredWrapper } from '../../common.js';

export const draftPostWrapper = createVendoredWrapper({
  id: 'typefully-draft-post',
  sourceDependency: 'typefully-agent-skills',
  purpose: 'Draft social posts when the Typefully pack is available.',
  taskTypesSupported: ['social-execution'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['asset'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/typefully/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Draft social post directions',
    content: `# Draft Post\n\nGoal: ${goal}\n\nBrand: ${context.brandName ?? context.projectName ?? context.projectId}\nProof points: ${(context.proofPoints ?? ['Undocumented']).join('; ')}\n\nDrafting rules:\n- Keep the post focused on one idea.\n- Use a clear payoff or insight, not vague hype.\n- Avoid pretending posting or scheduling occurred unless a live tool adapter is healthy.`
  })
});
