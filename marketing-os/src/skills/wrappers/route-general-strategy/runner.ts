import { routeSkillContent } from '../common.js';

export function routeGeneralStrategyRunner(goal: string): string {
  return routeSkillContent(
    'Route general strategy work',
    `Goal: ${goal}\n\nPrefer Corey for context, CRO, pricing, lifecycle, revops, and general strategy when its dependency is healthy. Fall back to native strategy skills when not available.`
  );
}
