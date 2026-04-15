import type { MarketingContext } from '../context/contextSchema.js';

export function redactContextForVendoredSkill(context: MarketingContext): MarketingContext {
  return {
    ...context,
    notes: undefined,
    sourceReferences: (context.sourceReferences ?? []).map((source) => ({
      id: source.id,
      kind: source.kind,
      label: source.label,
      location: source.location,
      collectedAt: source.collectedAt
    })),
    assumptions: context.assumptions,
    confidenceScores: context.confidenceScores
  };
}
