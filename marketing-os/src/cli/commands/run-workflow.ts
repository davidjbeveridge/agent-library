import { readFile } from 'node:fs/promises';
import { MarketingContextSchema } from '../../core/context/contextSchema.js';
import { runWorkflow } from '../../core/orchestrator/workflowEngine.js';
import { getWorkflow } from '../../workflows/index.js';
import { createOrchestrator } from './helpers.js';

export async function runWorkflowCommand(workflowId: string, inputPath: string, cwd = process.cwd()): Promise<void> {
  const workflow = getWorkflow(workflowId);
  if (!workflow) {
    throw new Error(`Unknown workflow: ${workflowId}`);
  }
  const raw = JSON.parse(await readFile(inputPath, 'utf8'));
  const context = MarketingContextSchema.parse(raw);
  const orchestrator = createOrchestrator(cwd);
  const result = await runWorkflow(orchestrator, workflow, context);
  console.log(JSON.stringify(result, null, 2));
}
