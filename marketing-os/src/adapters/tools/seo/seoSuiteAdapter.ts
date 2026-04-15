import { createToolAdapter } from '../common.js';

export const seoSuiteAdapter = createToolAdapter({
  id: 'seo-suite',
  category: 'seo',
  capabilities: ['keyword research', 'backlink research', 'competitor seo analysis'],
  authRequirements: ['SEO_SUITE_API_KEY'],
  readWriteScope: 'read-only',
  setupText: 'Add an SEO suite API key to unlock deeper keyword and competitor data.',
  envVars: ['SEO_SUITE_API_KEY']
});
