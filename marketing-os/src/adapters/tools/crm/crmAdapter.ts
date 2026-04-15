import { createToolAdapter } from '../common.js';

export const crmAdapter = createToolAdapter({
  id: 'crm',
  category: 'crm',
  capabilities: ['lead summaries', 'segment insights'],
  authRequirements: ['CRM_API_KEY'],
  readWriteScope: 'read-only',
  setupText: 'Provide CRM credentials to unlock segment and pipeline context.',
  envVars: ['CRM_API_KEY']
});
