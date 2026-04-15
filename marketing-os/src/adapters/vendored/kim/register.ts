import type { VendoredSkillWrapper } from '../../../core/types/dependencies.js';
import { avatarWrapper } from './wrappers/avatar.js';
import { offerWrapper } from './wrappers/offer.js';
import { anglesWrapper } from './wrappers/angles.js';
import { objectionsWrapper } from './wrappers/objections.js';
import { adCopyWrapper } from './wrappers/adCopy.js';
import { funnelWrapper } from './wrappers/funnel.js';

export const kimWrappers: VendoredSkillWrapper[] = [avatarWrapper, offerWrapper, anglesWrapper, objectionsWrapper, adCopyWrapper, funnelWrapper];
