import type { VendoredSkillWrapper } from '../../../core/types/dependencies.js';
import { draftPostWrapper } from './wrappers/draftPost.js';
import { schedulePostWrapper } from './wrappers/schedulePost.js';
import { publishPostWrapper } from './wrappers/publishPost.js';

export const typefullyWrappers: VendoredSkillWrapper[] = [draftPostWrapper, schedulePostWrapper, publishPostWrapper];
