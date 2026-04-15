import { createToolAdapter } from '../common.js';

export const linkedInAdsAdapter = createToolAdapter({
  id: 'linkedin-ads',
  category: 'ads',
  capabilities: ['b2b campaign diagnostics', 'campaign writes'],
  authRequirements: ['LINKEDIN_ADS_ACCOUNT_ID'],
  readWriteScope: 'read-write',
  setupText: 'Provide LinkedIn Ads access for B2B campaign diagnostics and execution.',
  envVars: ['LINKEDIN_ADS_ACCOUNT_ID']
});
