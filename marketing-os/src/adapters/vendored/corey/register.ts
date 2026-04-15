import type { VendoredSkillWrapper } from '../../../core/types/dependencies.js';
import { productMarketingContextWrapper } from './wrappers/productMarketingContext.js';
import { croWrapper } from './wrappers/cro.js';
import { seoWrapper } from './wrappers/seo.js';
import { lifecycleWrapper } from './wrappers/lifecycle.js';
import { pricingWrapper } from './wrappers/pricing.js';
import { revopsWrapper } from './wrappers/revops.js';

export const coreyWrappers: VendoredSkillWrapper[] = [
  productMarketingContextWrapper,
  croWrapper,
  seoWrapper,
  lifecycleWrapper,
  pricingWrapper,
  revopsWrapper
];
