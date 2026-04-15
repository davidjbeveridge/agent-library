import { createVendoredWrapper } from '../../common.js';

export const publishPostWrapper = createVendoredWrapper({
  id: 'typefully-publish-post',
  sourceDependency: 'typefully-agent-skills',
  purpose: 'Prepare a publish action when Typefully is configured for write access.',
  taskTypesSupported: ['social-execution'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  requiresTools: ['typefully-api'],
  outputKinds: ['plan'],
  strengthScore: 6,
  executionReadinessRules: ['dependency manifest valid', 'typefully-api adapter healthy', 'read-write access available'],
  playbookPath: 'skills/typefully/SKILL.md',
  formatter: (_context, goal) => ({
    title: 'Publish post plan',
    content: `# Publish Post\n\nGoal: ${goal}\n\nThis wrapper never pretends publishing occurred. It produces an execution plan unless the local social adapter is healthy and approved for writes.`
  })
});
