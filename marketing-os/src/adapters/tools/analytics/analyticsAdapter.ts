import { createToolAdapter } from '../common.js';

export const analyticsAdapter = createToolAdapter({
  id: 'analytics',
  category: 'analytics',
  capabilities: ['traffic signals', 'behavior signals', 'funnel reporting'],
  authRequirements: ['ANALYTICS_PROPERTY'],
  readWriteScope: 'read-only',
  setupText: 'Configure analytics property access for live funnel and behavior data.',
  envVars: ['ANALYTICS_PROPERTY']
});
