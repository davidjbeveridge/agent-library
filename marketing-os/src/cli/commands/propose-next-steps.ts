import { readFile } from 'node:fs/promises';
import { MarketingContextSchema } from '../../core/context/contextSchema.js';
import { deriveIterationActions } from '../../core/orchestrator/iterationLoop.js';

export async function runProposeNextSteps(inputPath: string): Promise<void> {
  const raw = JSON.parse(await readFile(inputPath, 'utf8'));
  const context = MarketingContextSchema.parse(raw);
  console.log(JSON.stringify({ nextSteps: deriveIterationActions(context) }, null, 2));
}
