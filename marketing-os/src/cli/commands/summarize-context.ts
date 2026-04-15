import { readFile } from 'node:fs/promises';
import { MarketingContextSchema } from '../../core/context/contextSchema.js';

export async function runSummarizeContext(inputPath: string): Promise<void> {
  const raw = JSON.parse(await readFile(inputPath, 'utf8'));
  const context = MarketingContextSchema.parse(raw);
  console.log(JSON.stringify({
    projectId: context.projectId,
    businessModel: context.businessModel,
    primaryGoals: context.primaryGoals,
    currentChannels: context.currentChannels,
    knownBottlenecks: context.knownBottlenecks,
    missingCapabilities: context.missingCapabilities
  }, null, 2));
}
