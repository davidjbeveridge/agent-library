import { createToolAdapter } from '../common.js';

export const metaAdsAdapter = createToolAdapter({
  id: 'meta-ads',
  category: 'ads',
  capabilities: ['campaign diagnostics', 'creative iteration guidance', 'campaign writes'],
  authRequirements: ['META_ADS_ACCOUNT_ID'],
  readWriteScope: 'read-write',
  setupText: 'Provide Meta Ads account access to unlock campaign reads and writes.',
  envVars: ['META_ADS_ACCOUNT_ID']
});
