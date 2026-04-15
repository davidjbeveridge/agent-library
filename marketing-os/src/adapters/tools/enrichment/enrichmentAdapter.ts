import { createToolAdapter } from '../common.js';

export const enrichmentAdapter = createToolAdapter({
  id: 'enrichment',
  category: 'enrichment',
  capabilities: ['account targeting', 'lead enrichment'],
  authRequirements: ['ENRICHMENT_API_KEY'],
  readWriteScope: 'read-only',
  setupText: 'Configure an enrichment provider to unlock prospecting and account research.',
  envVars: ['ENRICHMENT_API_KEY']
});
