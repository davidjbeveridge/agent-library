import { routeSkillContent } from '../common.js';

export function routePaidAcquisitionRunner(goal: string): string {
  return routeSkillContent(
    'Route paid acquisition work',
    `Goal: ${goal}\n\nPrefer Kim for direct response, offer, angles, objections, ad copy, and funnel persuasion. Fall back to native angle or experiment skills when Kim is unavailable.`
  );
}
