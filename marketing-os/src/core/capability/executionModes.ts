import type { CapabilityReport } from '../types/dependencies.js';
import type { ExecutionMode } from '../types/dependencies.js';

export function deriveExecutionMode(input: Pick<CapabilityReport, 'vendored' | 'tools'>): ExecutionMode {
  const vendoredAvailable = input.vendored.some((dependency) => dependency.enabled && dependency.manifestValid && dependency.wrappersReady > 0);
  const healthyTools = input.tools.filter((tool) => tool.available && tool.healthy);
  const hasReadWrite = healthyTools.some((tool) => tool.readWrite === 'read-write');

  if (!vendoredAvailable && healthyTools.length === 0) {
    return 'MODE_MINIMAL';
  }
  if (vendoredAvailable && healthyTools.length === 0) {
    return 'MODE_COMPOSED';
  }
  if (vendoredAvailable && healthyTools.length > 0 && !hasReadWrite) {
    return 'MODE_ENHANCED';
  }
  return 'MODE_FULL';
}
