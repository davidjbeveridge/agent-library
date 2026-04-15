import type { MarketingContext, MarketingContextUpdate } from './contextSchema.js';
import { normalizeMarketingContext, mergeMarketingContext } from './contextNormalizer.js';

export interface ContextSeedInput {
  projectId: string;
  projectName?: string;
  brandName?: string;
  website?: string;
  businessDescription?: string;
  businessModel?: MarketingContext['businessModel'];
  lifecycleStage?: MarketingContext['lifecycleStage'];
  primaryGoal?: string;
  notes?: string[];
}

export function buildMarketingContext(seed: ContextSeedInput): MarketingContext {
  return normalizeMarketingContext({
    projectId: seed.projectId,
    projectName: seed.projectName,
    brandName: seed.brandName,
    website: seed.website,
    businessDescription: seed.businessDescription,
    businessModel: seed.businessModel,
    lifecycleStage: seed.lifecycleStage,
    primaryGoals: seed.primaryGoal ? [seed.primaryGoal] : undefined,
    notes: seed.notes,
    sourceReferences: [
      {
        id: `seed:${seed.projectId}`,
        kind: 'user-input',
        label: 'Initial project seed',
        collectedAt: new Date().toISOString()
      }
    ]
  });
}

export function updateMarketingContext(current: MarketingContext, update: MarketingContextUpdate): MarketingContext {
  return mergeMarketingContext(current, update);
}
