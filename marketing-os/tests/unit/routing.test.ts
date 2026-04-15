import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { routeTask } from '../../src/core/orchestrator/routing.js';
import { vendoredWrappers } from '../../src/adapters/vendored/register.js';
import { nativeSkills } from '../../src/skills/native/register.js';

const projectRoot = path.resolve(process.cwd());

describe('routing policy', () => {
  it('prefers Kim for paid acquisition when dependency is healthy', async () => {
    const decision = await routeTask(
      projectRoot,
      { id: 'task-1', taskType: 'paid-acquisition', category: 'execution', goal: 'Launch paid ads' },
      {
        executionMode: 'MODE_COMPOSED',
        vendored: [
          { id: 'realkimbarrett-advertising-skills', displayName: 'Kim', path: '', enabled: true, importedCommitSha: '', license: 'NOASSERTION', trustLevel: 'semi-trusted', wrappersReady: 6, missingWrappers: [], manifestValid: true },
          { id: 'coreyhaines31-marketingskills', displayName: 'Corey', path: '', enabled: true, importedCommitSha: '', license: 'MIT', trustLevel: 'semi-trusted', wrappersReady: 6, missingWrappers: [], manifestValid: true },
          { id: 'kostja94-marketing-skills', displayName: 'Kostja', path: '', enabled: true, importedCommitSha: '', license: 'MIT', trustLevel: 'semi-trusted', wrappersReady: 4, missingWrappers: [], manifestValid: true },
          { id: 'typefully-agent-skills', displayName: 'Typefully', path: '', enabled: true, importedCommitSha: '', license: 'MIT', trustLevel: 'semi-trusted', wrappersReady: 3, missingWrappers: [], manifestValid: true }
        ],
        tools: [],
        missingCapabilities: [],
        recommendedSetups: []
      },
      vendoredWrappers,
      nativeSkills
    );

    expect(decision.chosen.some((id) => id.startsWith('kim-'))).toBe(true);
  });

  it('falls back to native skills when preferred dependency is unavailable', async () => {
    const decision = await routeTask(
      projectRoot,
      { id: 'task-2', taskType: 'seo-content', category: 'execution', goal: 'Create SEO plan' },
      {
        executionMode: 'MODE_MINIMAL',
        vendored: [],
        tools: [],
        missingCapabilities: [],
        recommendedSetups: []
      },
      vendoredWrappers,
      nativeSkills
    );

    expect(decision.chosen).toContain('seo-content-brief');
  });
});
