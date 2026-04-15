import type { BusinessModel, ProvenanceRecord } from './shared.js';
import type { OutputArtifact } from './outputs.js';
import type { TaskType } from './tasks.js';
import type { MarketingContext } from '../context/contextSchema.js';

export type VendoredDependencyId =
  | 'coreyhaines31-marketingskills'
  | 'realkimbarrett-advertising-skills'
  | 'kostja94-marketing-skills'
  | 'typefully-agent-skills';

export type ExecutionMode = 'MODE_MINIMAL' | 'MODE_COMPOSED' | 'MODE_ENHANCED' | 'MODE_FULL';

export interface VendoredDependencyRecord {
  id: VendoredDependencyId;
  displayName: string;
  path: string;
  enabled: boolean;
  importedCommitSha: string;
  manifestValid?: boolean;
  license: string;
  trustLevel: 'semi-trusted';
  notes?: string[];
}

export interface WrapperExecutionResult {
  artifacts: OutputArtifact[];
  summary: string;
  provenance: ProvenanceRecord[];
  confidenceNotes: string[];
}

export interface VendoredSkillWrapper {
  id: string;
  sourceDependency: VendoredDependencyId;
  purpose: string;
  taskTypesSupported: TaskType[];
  businessModelsSupported: BusinessModel[];
  requiresTools: string[];
  optionalTools: string[];
  outputKinds: OutputArtifact['kind'][];
  strengthScore: number;
  executionReadinessRules: string[];
  run(context: MarketingContext, goal: string): Promise<WrapperExecutionResult>;
}

export interface NativeSkillRunner {
  id: string;
  purpose: string;
  taskTypesSupported: TaskType[];
  run(context: MarketingContext, goal: string): Promise<WrapperExecutionResult>;
}

export interface CapabilityReport {
  executionMode: ExecutionMode;
  vendored: Array<VendoredDependencyRecord & { wrappersReady: number; missingWrappers: string[] }>;
  tools: Array<{
    id: string;
    available: boolean;
    healthy: boolean;
    readWrite: 'read-only' | 'read-write';
    reason?: string;
  }>;
  missingCapabilities: string[];
  recommendedSetups: string[];
}
