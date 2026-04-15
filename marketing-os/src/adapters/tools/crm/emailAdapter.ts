import { createToolAdapter } from '../common.js';

export const emailAdapter = createToolAdapter({
  id: 'email',
  category: 'crm',
  capabilities: ['email execution', 'sequence diagnostics'],
  authRequirements: ['EMAIL_API_KEY'],
  readWriteScope: 'read-write',
  setupText: 'Provide email platform credentials for lifecycle execution.',
  envVars: ['EMAIL_API_KEY']
});
