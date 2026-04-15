import { describe, expect, it } from 'vitest';
import { validateOutputs } from '../../src/core/safety/outputValidation.js';

describe('output validation', () => {
  it('flags unsupported quantified claims', () => {
    const result = validateOutputs([
      { id: 'artifact-1', kind: 'report', title: 'Test', content: 'We guarantee a 30% conversion increase.', format: 'markdown' }
    ]);
    expect(result.valid).toBe(false);
    expect(result.risks.length).toBeGreaterThan(0);
  });
});
