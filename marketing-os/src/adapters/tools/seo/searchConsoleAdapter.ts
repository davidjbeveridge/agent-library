import { createToolAdapter } from '../common.js';

export const searchConsoleAdapter = createToolAdapter({
  id: 'search-console',
  category: 'seo',
  capabilities: ['query insights', 'indexing checks', 'sitemap checks'],
  authRequirements: ['SEARCH_CONSOLE_PROPERTY'],
  readWriteScope: 'read-only',
  setupText: 'Provide Search Console credentials and property configuration.',
  envVars: ['SEARCH_CONSOLE_PROPERTY']
});
