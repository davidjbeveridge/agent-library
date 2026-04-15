import path from 'node:path';
import { CapabilityDetector } from '../../core/capability/capabilityDetector.js';
import { MarketingOrchestrator } from '../../core/orchestrator/MarketingOrchestrator.js';
import { nativeSkills } from '../../skills/native/register.js';
import { vendoredWrappers } from '../../adapters/vendored/register.js';
import { toolAdapters } from '../../adapters/tools/register.js';

export function createOrchestrator(cwd = process.cwd()): MarketingOrchestrator {
  const projectRoot = path.resolve(cwd);
  const capabilityDetector = new CapabilityDetector(projectRoot, vendoredWrappers, toolAdapters);
  return new MarketingOrchestrator(projectRoot, vendoredWrappers, nativeSkills, capabilityDetector);
}
