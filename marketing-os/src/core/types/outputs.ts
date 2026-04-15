import type { Assumption, ConfidenceScore, EvidenceReference, ProvenanceRecord } from './shared.js';

export interface OutputArtifact {
  id: string;
  kind: 'summary' | 'brief' | 'plan' | 'asset' | 'report' | 'backlog' | 'recommendation';
  title: string;
  content: string;
  format: 'markdown' | 'json' | 'text';
}

export interface RiskFlag {
  id: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  mitigation?: string;
}

export interface SetupSuggestion {
  capability: string;
  benefit: string;
  setupHint: string;
}

export interface OrchestratorResult {
  summary: string;
  assumptions: Assumption[];
  chosenPath: string[];
  evidenceBasis: EvidenceReference[];
  artifacts: OutputArtifact[];
  risks: RiskFlag[];
  nextActions: string[];
  setupSuggestions: SetupSuggestion[];
  provenance: ProvenanceRecord[];
  confidence: ConfidenceScore[];
}
