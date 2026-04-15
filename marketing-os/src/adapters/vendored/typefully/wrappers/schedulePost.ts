import { createVendoredWrapper } from '../../common.js';

export const schedulePostWrapper = createVendoredWrapper({
  id: 'typefully-schedule-post',
  sourceDependency: 'typefully-agent-skills',
  purpose: 'Prepare a post scheduling action when Typefully is configured.',
  taskTypesSupported: ['social-execution'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  requiresTools: ['typefully-api'],
  outputKinds: ['plan'],
  strengthScore: 6,
  executionReadinessRules: ['dependency manifest valid', 'typefully-api adapter healthy', 'read-write access available'],
  playbookPath: 'skills/typefully/SKILL.md',
  formatter: (_context, goal) => ({
    title: 'Schedule post plan',
    content: `# Schedule Post\n\nGoal: ${goal}\n\nThis wrapper is execution-gated. It only schedules when the local Typefully API adapter is healthy, configured, and explicitly allowed to write.`
  })
});
