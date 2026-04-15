import { describe, expect, it } from 'vitest';
import { deriveExecutionMode } from '../../src/core/capability/executionModes.js';

describe('execution mode derivation', () => {
  it('returns MODE_MINIMAL with no vendored dependencies or tools', () => {
    const mode = deriveExecutionMode({ vendored: [], tools: [] });
    expect(mode).toBe('MODE_MINIMAL');
  });

  it('returns MODE_COMPOSED with valid vendored dependencies and no tools', () => {
    const mode = deriveExecutionMode({
      vendored: [{ id: 'coreyhaines31-marketingskills', displayName: 'dep', path: '', enabled: true, importedCommitSha: '', license: 'MIT', trustLevel: 'semi-trusted', wrappersReady: 1, missingWrappers: [], manifestValid: true }],
      tools: []
    });
    expect(mode).toBe('MODE_COMPOSED');
  });
});
