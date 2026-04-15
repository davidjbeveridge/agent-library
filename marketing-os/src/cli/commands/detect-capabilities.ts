import { createOrchestrator } from './helpers.js';

export async function runDetectCapabilities(cwd = process.cwd()): Promise<void> {
  const orchestrator = createOrchestrator(cwd);
  const report = await orchestrator.detectCapabilities();
  console.log(JSON.stringify(report, null, 2));
}
