import { createToolAdapter } from '../common.js';

export const googleAdsAdapter = createToolAdapter({
  id: 'google-ads',
  category: 'ads',
  capabilities: ['campaign diagnostics', 'budget guidance', 'campaign writes'],
  authRequirements: ['GOOGLE_ADS_CUSTOMER_ID'],
  readWriteScope: 'read-write',
  setupText: 'Provide Google Ads account access to unlock diagnostics and campaign actions.',
  envVars: ['GOOGLE_ADS_CUSTOMER_ID']
});
