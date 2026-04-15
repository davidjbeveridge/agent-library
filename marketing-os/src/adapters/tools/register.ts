import { webResearchAdapter } from './web/webResearchAdapter.js';
import { crawlerAdapter } from './web/crawlerAdapter.js';
import { searchConsoleAdapter } from './seo/searchConsoleAdapter.js';
import { seoSuiteAdapter } from './seo/seoSuiteAdapter.js';
import { analyticsAdapter } from './analytics/analyticsAdapter.js';
import { experimentationAdapter } from './analytics/experimentationAdapter.js';
import { crmAdapter } from './crm/crmAdapter.js';
import { emailAdapter } from './crm/emailAdapter.js';
import { googleAdsAdapter } from './ads/googleAdsAdapter.js';
import { metaAdsAdapter } from './ads/metaAdsAdapter.js';
import { linkedInAdsAdapter } from './ads/linkedInAdsAdapter.js';
import { typefullyApiAdapter } from './social/typefullyApiAdapter.js';
import { enrichmentAdapter } from './enrichment/enrichmentAdapter.js';

export const toolAdapters = [
  webResearchAdapter,
  crawlerAdapter,
  searchConsoleAdapter,
  seoSuiteAdapter,
  analyticsAdapter,
  experimentationAdapter,
  crmAdapter,
  emailAdapter,
  googleAdsAdapter,
  metaAdsAdapter,
  linkedInAdsAdapter,
  typefullyApiAdapter,
  enrichmentAdapter
];
