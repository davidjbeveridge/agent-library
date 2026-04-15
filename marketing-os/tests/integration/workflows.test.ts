import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { MarketingContextSchema } from '../../src/core/context/contextSchema.js';
import { CapabilityDetector } from '../../src/core/capability/capabilityDetector.js';
import { MarketingOrchestrator } from '../../src/core/orchestrator/MarketingOrchestrator.js';
import { nativeSkills } from '../../src/skills/native/register.js';
import { vendoredWrappers } from '../../src/adapters/vendored/register.js';
import { toolAdapters } from '../../src/adapters/tools/register.js';
import { runWorkflow } from '../../src/core/orchestrator/workflowEngine.js';
import { launchSaasWorkflow } from '../../src/workflows/launch-saas.js';

const projectRoot = path.resolve(process.cwd());

describe('workflow execution', () => {
  it('runs the launch-saas workflow against the sample fixture', async () => {
    const raw = JSON.parse(await readFile(path.join(projectRoot, 'examples/sample-projects/saas/context.json'), 'utf8'));
    const context = MarketingContextSchema.parse(raw);
    const capabilityDetector = new CapabilityDetector(projectRoot, vendoredWrappers, toolAdapters);
    const orchestrator = new MarketingOrchestrator(projectRoot, vendoredWrappers, nativeSkills, capabilityDetector);
    const result = await runWorkflow(orchestrator, launchSaasWorkflow, context);

    expect(result.results.length).toBe(launchSaasWorkflow.steps.length);
    expect(result.results[0]?.summary.length).toBeGreaterThan(0);
  });
});
