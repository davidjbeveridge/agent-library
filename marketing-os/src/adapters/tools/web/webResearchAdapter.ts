import { createToolAdapter } from '../common.js';

export const webResearchAdapter = createToolAdapter({
  id: 'web-research',
  category: 'web',
  capabilities: ['competitor research', 'offer research', 'market signal gathering'],
  authRequirements: [],
  readWriteScope: 'read-only',
  setupText: 'Connect a search or browsing capability to unlock live web research.',
  envVars: ['MARKETING_OS_ENABLE_WEB_RESEARCH']
});
