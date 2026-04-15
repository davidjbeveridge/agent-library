export type BusinessModel =
  | 'saas'
  | 'plg'
  | 'ecommerce'
  | 'info-product'
  | 'local-service'
  | 'agency'
  | 'b2b-service'
  | 'developer-tools'
  | 'open-source-hybrid'
  | 'unknown';

export type LifecycleStage =
  | 'idea'
  | 'prelaunch'
  | 'launch'
  | 'growth'
  | 'mature'
  | 'stagnant'
  | 'turnaround'
  | 'unknown';

export type ConfidenceLevel = 'low' | 'medium' | 'high';

export interface SourceReference {
  id: string;
  kind: 'user-input' | 'document' | 'website' | 'tool' | 'vendored-skill' | 'manual-note';
  label: string;
  location?: string;
  excerpt?: string;
  collectedAt?: string;
}

export interface EvidenceReference {
  summary: string;
  sourceIds: string[];
  strength: ConfidenceLevel;
  gaps?: string[];
}

export interface ConfidenceScore {
  topic: string;
  level: ConfidenceLevel;
  numericScore?: number;
  rationale: string;
}

export interface Assumption {
  id: string;
  statement: string;
  impact: 'low' | 'medium' | 'high';
  status: 'active' | 'validated' | 'rejected';
}

export interface ProvenanceRecord {
  producer: string;
  sourceType: 'native-skill' | 'vendored-wrapper' | 'tool-adapter' | 'orchestrator' | 'manual';
  sourceId: string;
  generatedAt: string;
  notes?: string;
}

export interface KPI {
  id: string;
  name: string;
  category: 'leading' | 'lagging';
  metric: string;
  target?: string;
  currentValue?: string;
  notes?: string;
}

export interface KPIBranch {
  businessModel: BusinessModel;
  northStar?: KPI;
  leadingIndicators: KPI[];
  laggingIndicators: KPI[];
}
