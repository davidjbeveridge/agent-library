import { createToolAdapter } from '../common.js';

export const typefullyApiAdapter = createToolAdapter({
  id: 'typefully-api',
  category: 'social',
  capabilities: ['draft posts', 'schedule posts', 'publish posts'],
  authRequirements: ['TYPEFULLY_API_KEY'],
  readWriteScope: 'read-write',
  setupText: 'Provide a Typefully API key to unlock draft, scheduling, and publishing actions.',
  envVars: ['TYPEFULLY_API_KEY']
});
