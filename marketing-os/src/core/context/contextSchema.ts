import { z } from 'zod';

const StringArray = z.array(z.string());

export const SourceReferenceSchema = z.object({
  id: z.string(),
  kind: z.enum(['user-input', 'document', 'website', 'tool', 'vendored-skill', 'manual-note']),
  label: z.string(),
  location: z.string().optional(),
  excerpt: z.string().optional(),
  collectedAt: z.string().optional()
});

export const EvidenceReferenceSchema = z.object({
  summary: z.string(),
  sourceIds: StringArray,
  strength: z.enum(['low', 'medium', 'high']),
  gaps: StringArray.optional()
});

export const ConfidenceScoreSchema = z.object({
  topic: z.string(),
  level: z.enum(['low', 'medium', 'high']),
  numericScore: z.number().min(0).max(1).optional(),
  rationale: z.string()
});

export const AssumptionSchema = z.object({
  id: z.string(),
  statement: z.string(),
  impact: z.enum(['low', 'medium', 'high']),
  status: z.enum(['active', 'validated', 'rejected'])
});

export const ProvenanceRecordSchema = z.object({
  producer: z.string(),
  sourceType: z.enum(['native-skill', 'vendored-wrapper', 'tool-adapter', 'orchestrator', 'manual']),
  sourceId: z.string(),
  generatedAt: z.string(),
  notes: z.string().optional()
});

const InsightSchema = z.object({
  id: z.string(),
  summary: z.string(),
  details: z.string().optional(),
  provenance: ProvenanceRecordSchema.optional(),
  evidence: EvidenceReferenceSchema.optional(),
  confidence: ConfidenceScoreSchema.optional()
});

const OfferSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  audience: z.string().optional(),
  pricePoint: z.string().optional(),
  margin: z.string().optional(),
  packaging: z.string().optional()
});

const PersonaSchema = z.object({
  name: z.string(),
  segment: z.string().optional(),
  pains: StringArray.optional(),
  desiredOutcomes: StringArray.optional(),
  objections: StringArray.optional(),
  buyingTriggers: StringArray.optional(),
  awarenessStage: z.string().optional(),
  provenance: ProvenanceRecordSchema.optional(),
  confidence: ConfidenceScoreSchema.optional()
});

const CompetitorSchema = z.object({
  name: z.string(),
  website: z.string().optional(),
  notes: z.string().optional(),
  differentiation: z.string().optional(),
  evidence: EvidenceReferenceSchema.optional(),
  confidence: ConfidenceScoreSchema.optional()
});

const KPIBranchSchema = z.object({
  businessModel: z.enum(['saas', 'plg', 'ecommerce', 'info-product', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'open-source-hybrid', 'unknown']),
  northStar: z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(['leading', 'lagging']),
    metric: z.string(),
    target: z.string().optional(),
    currentValue: z.string().optional(),
    notes: z.string().optional()
  }).optional(),
  leadingIndicators: z.array(z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(['leading', 'lagging']),
    metric: z.string(),
    target: z.string().optional(),
    currentValue: z.string().optional(),
    notes: z.string().optional()
  })),
  laggingIndicators: z.array(z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(['leading', 'lagging']),
    metric: z.string(),
    target: z.string().optional(),
    currentValue: z.string().optional(),
    notes: z.string().optional()
  }))
});

const ExperimentSchema = z.object({
  id: z.string(),
  hypothesis: z.string(),
  channel: z.string().optional(),
  successCriteria: StringArray.optional(),
  expectedImpact: z.enum(['low', 'medium', 'high']).optional(),
  status: z.enum(['proposed', 'running', 'completed', 'cancelled']).optional(),
  evidence: EvidenceReferenceSchema.optional(),
  confidence: ConfidenceScoreSchema.optional(),
  results: StringArray.optional(),
  learnings: StringArray.optional()
});

const AssetSchema = z.object({
  id: z.string(),
  kind: z.string(),
  title: z.string(),
  location: z.string().optional(),
  notes: z.string().optional(),
  provenance: ProvenanceRecordSchema.optional()
});

export const MarketingContextSchema = z.object({
  projectId: z.string(),
  projectName: z.string().optional(),
  brandName: z.string().optional(),
  website: z.string().optional(),
  businessDescription: z.string().optional(),
  businessModel: z.enum(['saas', 'plg', 'ecommerce', 'info-product', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'open-source-hybrid', 'unknown']).optional(),
  lifecycleStage: z.enum(['idea', 'prelaunch', 'launch', 'growth', 'mature', 'stagnant', 'turnaround', 'unknown']).optional(),
  geography: StringArray.optional(),
  languages: StringArray.optional(),

  primaryOffer: OfferSchema.optional(),
  secondaryOffers: z.array(OfferSchema).optional(),
  pricingModel: z.string().optional(),
  pricePoints: StringArray.optional(),
  packaging: z.string().optional(),
  margins: StringArray.optional(),
  salesMotion: z.string().optional(),
  onboardingModel: z.string().optional(),
  retentionModel: z.string().optional(),

  ICPs: StringArray.optional(),
  personas: z.array(PersonaSchema).optional(),
  jobsToBeDone: StringArray.optional(),
  pains: StringArray.optional(),
  desiredOutcomes: StringArray.optional(),
  objections: StringArray.optional(),
  buyingTriggers: StringArray.optional(),
  awarenessStageBySegment: z.record(z.string()).optional(),
  sophisticationStage: z.string().optional(),

  category: z.string().optional(),
  alternatives: StringArray.optional(),
  competitors: z.array(CompetitorSchema).optional(),
  differentiation: StringArray.optional(),
  uniqueMechanism: z.string().optional(),
  positioningStatement: z.string().optional(),
  claims: StringArray.optional(),
  proofPoints: StringArray.optional(),
  trustSignals: StringArray.optional(),

  currentChannels: StringArray.optional(),
  historicalChannels: StringArray.optional(),
  ownedAssets: StringArray.optional(),
  funnelStages: StringArray.optional(),
  knownBottlenecks: StringArray.optional(),
  messagingByStage: z.record(z.string()).optional(),
  currentCTAs: StringArray.optional(),

  primaryGoals: StringArray.optional(),
  secondaryGoals: StringArray.optional(),
  kpiTree: z.array(KPIBranchSchema).optional(),
  constraints: StringArray.optional(),
  complianceLimits: StringArray.optional(),
  budgetAssumptions: StringArray.optional(),
  timeHorizon: z.string().optional(),
  teamCapacity: z.string().optional(),
  riskTolerance: z.enum(['low', 'medium', 'high']).optional(),

  customerVoiceInsights: z.array(InsightSchema).optional(),
  reviewInsights: z.array(InsightSchema).optional(),
  competitorInsights: z.array(InsightSchema).optional(),
  marketInsights: z.array(InsightSchema).optional(),
  evidenceQuality: z.enum(['low', 'medium', 'high']).optional(),
  confidenceScores: z.array(ConfidenceScoreSchema).optional(),
  openQuestions: StringArray.optional(),

  hypotheses: StringArray.optional(),
  experiments: z.array(ExperimentSchema).optional(),
  results: StringArray.optional(),
  learnings: StringArray.optional(),
  failedIdeas: StringArray.optional(),
  nextRecommendedActions: StringArray.optional(),

  landingPages: z.array(AssetSchema).optional(),
  ads: z.array(AssetSchema).optional(),
  emailSequences: z.array(AssetSchema).optional(),
  blogPosts: z.array(AssetSchema).optional(),
  socialAssets: z.array(AssetSchema).optional(),
  salesAssets: z.array(AssetSchema).optional(),
  offers: z.array(AssetSchema).optional(),
  creativeConcepts: z.array(AssetSchema).optional(),

  vendoredSkillAvailability: z.record(z.boolean()).optional(),
  externalToolAvailability: z.record(z.boolean()).optional(),
  executionModes: StringArray.optional(),
  missingCapabilities: StringArray.optional(),
  recommendedSetups: StringArray.optional(),

  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  sourceReferences: z.array(SourceReferenceSchema).optional(),
  assumptions: z.array(AssumptionSchema).optional(),
  notes: StringArray.optional()
});

export const MarketingContextUpdateSchema = MarketingContextSchema.deepPartial().extend({
  projectId: z.string()
});

export type MarketingContext = z.infer<typeof MarketingContextSchema>;
export type MarketingContextUpdate = z.infer<typeof MarketingContextUpdateSchema>;
