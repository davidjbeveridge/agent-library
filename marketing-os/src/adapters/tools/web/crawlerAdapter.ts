import { createToolAdapter } from '../common.js';

export const crawlerAdapter = createToolAdapter({
  id: 'crawler',
  category: 'web',
  capabilities: ['site crawling', 'page analysis'],
  authRequirements: [],
  readWriteScope: 'read-only',
  setupText: 'Configure a local crawler or API to unlock page discovery and crawl-backed audits.',
  envVars: ['MARKETING_OS_ENABLE_CRAWLER']
});
