import type { NativeSkillRunner } from '../../core/types/dependencies.js';
import { contextSynthesisSkill } from './context-synthesis/runner.js';
import { competitorResearchSynthesisSkill } from './competitor-research-synthesis/runner.js';
import { audienceResearchSynthesisSkill } from './audience-research-synthesis/runner.js';
import { positioningBriefSkill } from './positioning-brief/runner.js';
import { landingPageAuditSkill } from './landing-page-audit/runner.js';
import { experimentBacklogSkill } from './experiment-backlog/runner.js';
import { seoContentBriefSkill } from './seo-content-brief/runner.js';
import { adAngleGeneratorSkill } from './ad-angle-generator/runner.js';
import { lifecycleRecommendationsSkill } from './lifecycle-recommendations/runner.js';
import { reportingSummarySkill } from './reporting-summary/runner.js';
import { nextStepPrioritizerSkill } from './next-step-prioritizer/runner.js';

export const nativeSkills: NativeSkillRunner[] = [
  contextSynthesisSkill,
  competitorResearchSynthesisSkill,
  audienceResearchSynthesisSkill,
  positioningBriefSkill,
  landingPageAuditSkill,
  experimentBacklogSkill,
  seoContentBriefSkill,
  adAngleGeneratorSkill,
  lifecycleRecommendationsSkill,
  reportingSummarySkill,
  nextStepPrioritizerSkill
];
