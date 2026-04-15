import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { MarketingOrchestrator } from '../../src/core/orchestrator/MarketingOrchestrator.js';
import { CapabilityDetector } from '../../src/core/capability/capabilityDetector.js';
import { nativeSkills } from '../../src/skills/native/register.js';
import { MarketingContextSchema } from '../../src/core/context/contextSchema.js';

const projectRoot = path.resolve(process.cwd());

describe('MarketingOrchestrator', () => {
  it('runs end-to-end in minimal mode with native skills only', async () => {
    const capabilityDetector = new CapabilityDetector(projectRoot, [], []);
    const orchestrator = new MarketingOrchestrator(projectRoot, [], nativeSkills, capabilityDetector);
    const context = MarketingContextSchema.parse({
      projectId: 'minimal',
      businessModel: 'saas',
      projectName: 'Minimal Test',
      primaryGoals: ['Find the next best move'],
      evidenceQuality: 'low'
    });
    const result = await orchestrator.runTask({
      context,
      task: { id: 'minimal-task', taskType: 'next-step-prioritization', category: 'iteration', goal: 'Rank next actions' }
    });

    expect(result.chosenPath).toContain('next-step-prioritizer');
    expect(result.nextActions.length).toBeGreaterThan(0);
  });
});
