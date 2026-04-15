import type { VendoredSkillWrapper } from '../../../core/types/dependencies.js';
import { seoWrapper } from './wrappers/seo.js';
import { contentWrapper } from './wrappers/content.js';
import { pageTypesWrapper } from './wrappers/pageTypes.js';
import { channelsWrapper } from './wrappers/channels.js';

export const kostjaWrappers: VendoredSkillWrapper[] = [seoWrapper, contentWrapper, pageTypesWrapper, channelsWrapper];
