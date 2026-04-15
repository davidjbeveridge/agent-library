export type ToolCategory = 'web' | 'seo' | 'analytics' | 'crm' | 'ads' | 'social' | 'enrichment';

export interface ToolAdapterDetectionResult {
  available: boolean;
  reason?: string;
}

export interface ToolHealthCheckResult {
  healthy: boolean;
  reason?: string;
}

export interface ToolAdapter {
  id: string;
  category: ToolCategory;
  capabilities: string[];
  authRequirements: string[];
  readWriteScope: 'read-only' | 'read-write';
  detect(): Promise<ToolAdapterDetectionResult>;
  healthCheck(): Promise<ToolHealthCheckResult>;
  invoke(input: Record<string, unknown>): Promise<Record<string, unknown>>;
  normalizeOutput(output: Record<string, unknown>): Record<string, unknown>;
  failureModes: string[];
  setupGuidance(): string;
}
