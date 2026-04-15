import { MarketingContextSchema, type MarketingContext, type MarketingContextUpdate } from './contextSchema.js';

export function normalizeMarketingContext(input: MarketingContextUpdate): MarketingContext {
  const now = new Date().toISOString();
  const merged: MarketingContext = {
    ...input,
    createdAt: input.createdAt ?? now,
    updatedAt: now,
    businessModel: input.businessModel ?? 'unknown',
    lifecycleStage: input.lifecycleStage ?? 'unknown'
  } as MarketingContext;

  return MarketingContextSchema.parse(merged);
}

export function mergeMarketingContext(current: MarketingContext, update: MarketingContextUpdate): MarketingContext {
  return normalizeMarketingContext({
    ...current,
    ...update,
    sourceReferences: [...(current.sourceReferences ?? []), ...(update.sourceReferences ?? [])],
    assumptions: [...(current.assumptions ?? []), ...(update.assumptions ?? [])],
    confidenceScores: [...(current.confidenceScores ?? []), ...(update.confidenceScores ?? [])],
    experiments: [...(current.experiments ?? []), ...(update.experiments ?? [])],
    results: [...(current.results ?? []), ...(update.results ?? [])],
    learnings: [...(current.learnings ?? []), ...(update.learnings ?? [])],
    nextRecommendedActions: [...(current.nextRecommendedActions ?? []), ...(update.nextRecommendedActions ?? [])]
  });
}
