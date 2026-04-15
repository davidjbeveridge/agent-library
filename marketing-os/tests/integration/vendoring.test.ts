import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { auditVendoredDependencies } from '../../src/vendoring/dependencyManager.js';

const projectRoot = path.resolve(process.cwd());

describe('vendored dependencies', () => {
  it('audits imported dependencies and finds metadata', async () => {
    const audit = await auditVendoredDependencies(projectRoot) as { dependencies: Array<{ id: string; exists: boolean; hasUpstreamMetadata: boolean }> };
    expect(audit.dependencies.length).toBe(4);
    expect(audit.dependencies.every((dependency) => dependency.exists)).toBe(true);
    expect(audit.dependencies.every((dependency) => dependency.hasUpstreamMetadata)).toBe(true);
  });
});
