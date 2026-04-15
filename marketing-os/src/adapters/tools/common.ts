import type { ToolAdapter } from '../../core/types/tools.js';

export interface ToolAdapterTemplate {
  id: string;
  category: ToolAdapter['category'];
  capabilities: string[];
  authRequirements: string[];
  readWriteScope: ToolAdapter['readWriteScope'];
  envVars?: string[];
  setupText: string;
}

export function createToolAdapter(template: ToolAdapterTemplate): ToolAdapter {
  return {
    id: template.id,
    category: template.category,
    capabilities: template.capabilities,
    authRequirements: template.authRequirements,
    readWriteScope: template.readWriteScope,
    async detect() {
      const missing = (template.envVars ?? []).filter((key) => !process.env[key]);
      return missing.length === 0
        ? { available: true }
        : { available: false, reason: `Missing env vars: ${missing.join(', ')}` };
    },
    async healthCheck() {
      const missing = (template.envVars ?? []).filter((key) => !process.env[key]);
      return missing.length === 0
        ? { healthy: true }
        : { healthy: false, reason: `Missing env vars: ${missing.join(', ')}` };
    },
    async invoke(input) {
      return { adapterId: template.id, input, simulated: true };
    },
    normalizeOutput(output) {
      return output;
    },
    failureModes: ['missing credentials', 'network unavailable', 'provider rejected request'],
    setupGuidance() {
      return template.setupText;
    }
  };
}
