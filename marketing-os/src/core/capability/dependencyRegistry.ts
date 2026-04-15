import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import type { VendoredDependencyId, VendoredDependencyRecord } from '../types/dependencies.js';

export interface DependencyRegistryEntry extends VendoredDependencyRecord {
  wrappers: string[];
}

async function listFiles(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const resolved = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return listFiles(resolved);
    }
    return [resolved];
  }));
  return files.flat();
}

export async function generateManifest(root: string): Promise<string[]> {
  const files = (await listFiles(root)).sort();
  const lines: string[] = [];
  for (const file of files) {
    const relative = path.relative(root, file);
    const hash = createHash('sha256').update(await readFile(file)).digest('hex');
    lines.push(`${hash}  ${relative}`);
  }
  return lines;
}

export async function verifyManifest(snapshotRoot: string, manifestPath: string): Promise<boolean> {
  try {
    const [expected, actual] = await Promise.all([
      readFile(manifestPath, 'utf8'),
      generateManifest(snapshotRoot).then((lines) => lines.join('\n'))
    ]);
    return expected.trim() === actual.trim();
  } catch {
    return false;
  }
}

export async function loadDependencyRegistry(projectRoot: string): Promise<DependencyRegistryEntry[]> {
  const registryPath = path.join(projectRoot, 'src/registries/vendored-skills.json');
  const raw = JSON.parse(await readFile(registryPath, 'utf8')) as { dependencies: Array<DependencyRegistryEntry> };
  const records: DependencyRegistryEntry[] = [];

  for (const dependency of raw.dependencies) {
    const snapshotRoot = path.join(projectRoot, dependency.path, 'snapshot');
    const manifestPath = path.join(projectRoot, dependency.path, 'MANIFEST.sha256');
    const exists = await stat(snapshotRoot).then(() => true).catch(() => false);
    const manifestValid = exists ? await verifyManifest(snapshotRoot, manifestPath) : false;
    records.push({ ...dependency, manifestValid });
  }

  return records;
}

export function findDependencyById(dependencies: DependencyRegistryEntry[], id: VendoredDependencyId): DependencyRegistryEntry | undefined {
  return dependencies.find((dependency) => dependency.id === id);
}
