import type { MarketingContext } from '../context/contextSchema.js';

export function deriveIterationActions(context: MarketingContext): string[] {
  const actions = new Set<string>();
  if ((context.experiments ?? []).length === 0) {
    actions.add('Create an initial experiment backlog from the top bottlenecks and assumptions.');
  }
  if ((context.results ?? []).length === 0) {
    actions.add('Add instrumentation or observation steps before making aggressive optimization calls.');
  }
  if (context.evidenceQuality === 'low') {
    actions.add('Prioritize research and measurement tasks that improve evidence quality.');
  }
  if ((context.knownBottlenecks ?? []).length > 0) {
    actions.add('Focus the next iteration on the highest-leverage documented bottleneck.');
  }
  return [...actions];
}
