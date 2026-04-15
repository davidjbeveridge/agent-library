import { routeSkillContent } from '../common.js';

export function routeContentSeoRunner(goal: string): string {
  return routeSkillContent(
    'Route content and SEO work',
    `Goal: ${goal}\n\nPrefer Kostja for broad SEO, page types, and channel adaptation when it is healthy. Fall back to native SEO content skills otherwise.`
  );
}
