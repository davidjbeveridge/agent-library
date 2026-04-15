import { routeSkillContent } from '../common.js';

export function routeSocialExecutionRunner(goal: string): string {
  return routeSkillContent(
    'Route social execution work',
    `Goal: ${goal}\n\nPrefer Typefully wrappers only when dependency and tool readiness are satisfied. Otherwise produce native draft-ready outputs without claiming scheduling or publishing occurred.`
  );
}
