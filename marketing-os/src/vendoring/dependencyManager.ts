import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const execFileAsync = promisify(execFile);

interface RegistryDependency {
  id: string;
  displayName: string;
  path: string;
  enabled: boolean;
  importedCommitSha: string;
  license: string;
  trustLevel: 'semi-trusted';
  notes?: string[];
  wrappers: string[];
  upstreamUrl: string;
}

async function listFiles(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const resolved = path.join(root, entry.name);
    return entry.isDirectory() ? listFiles(resolved) : [resolved];
  }));
  return files.flat().sort();
}

export async function buildManifest(snapshotRoot: string): Promise<string[]> {
  const files = await listFiles(snapshotRoot);
  const lines: string[] = [];
  for (const file of files) {
    const relative = path.relative(snapshotRoot, file);
    const hash = createHash('sha256').update(await readFile(file)).digest('hex');
    lines.push(`${hash}  ${relative}`);
  }
  return lines;
}

async function loadRegistry(projectRoot: string): Promise<RegistryDependency[]> {
  const registryPath = path.join(projectRoot, 'src/registries/vendored-skills.json');
  const raw = JSON.parse(await readFile(registryPath, 'utf8')) as { dependencies: RegistryDependency[] };
  return raw.dependencies;
}

export async function auditVendoredDependencies(projectRoot: string): Promise<Record<string, unknown>> {
  const dependencies = await loadRegistry(projectRoot);
  const audits = await Promise.all(dependencies.map(async (dependency) => {
    const root = path.join(projectRoot, dependency.path);
    const snapshotRoot = path.join(root, 'snapshot');
    const manifestPath = path.join(root, 'MANIFEST.sha256');
    const exists = await stat(snapshotRoot).then(() => true).catch(() => false);
    const actualManifest = exists ? (await buildManifest(snapshotRoot)).join('\n') : '';
    const expectedManifest = await readFile(manifestPath, 'utf8').catch(() => '');
    const upstream = await readFile(path.join(root, 'UPSTREAM.md'), 'utf8').catch(() => '');
    return {
      id: dependency.id,
      enabled: dependency.enabled,
      exists,
      manifestValid: exists && expectedManifest.trim() === actualManifest.trim(),
      hasUpstreamMetadata: upstream.includes(dependency.importedCommitSha),
      wrapperCount: dependency.wrappers.length
    };
  }));

  return { auditedAt: new Date().toISOString(), dependencies: audits };
}

async function cloneCandidate(upstreamUrl: string, targetSha?: string): Promise<{ root: string; sha: string }> {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'marketing-os-upgrade-'));
  await execFileAsync('git', ['clone', '--depth', '1', upstreamUrl, tempRoot]);
  let sha = (await execFileAsync('git', ['-C', tempRoot, 'rev-parse', 'HEAD'])).stdout.trim();
  if (targetSha && targetSha !== sha) {
    await execFileAsync('git', ['-C', tempRoot, 'fetch', '--depth', '1', 'origin', targetSha]);
    await execFileAsync('git', ['-C', tempRoot, 'checkout', '--detach', targetSha]);
    sha = targetSha;
  }
  await rm(path.join(tempRoot, '.git'), { recursive: true, force: true });
  return { root: tempRoot, sha };
}

export async function upgradeVendoredDependency(
  projectRoot: string,
  dependencyId: string,
  options: { targetSha?: string; apply?: boolean }
): Promise<Record<string, unknown>> {
  const dependencies = await loadRegistry(projectRoot);
  const dependency = dependencies.find((item) => item.id === dependencyId);
  if (!dependency) {
    throw new Error(`Unknown dependency: ${dependencyId}`);
  }

  const candidate = await cloneCandidate(dependency.upstreamUrl, options.targetSha);
  const candidateManifest = await buildManifest(candidate.root);
  const destinationRoot = path.join(projectRoot, dependency.path);
  const snapshotRoot = path.join(destinationRoot, 'snapshot');
  const currentManifest = await buildManifest(snapshotRoot).catch(() => []);

  const result = {
    dependencyId,
    currentSha: dependency.importedCommitSha,
    candidateSha: candidate.sha,
    changed: currentManifest.join('\n') !== candidateManifest.join('\n'),
    currentFileCount: currentManifest.length,
    candidateFileCount: candidateManifest.length,
    apply: Boolean(options.apply)
  };

  if (options.apply) {
    await rm(snapshotRoot, { recursive: true, force: true });
    await mkdir(snapshotRoot, { recursive: true });
    await cp(candidate.root, snapshotRoot, { recursive: true });
    await writeFile(path.join(destinationRoot, 'MANIFEST.sha256'), `${candidateManifest.join('\n')}\n`);
  }

  await rm(candidate.root, { recursive: true, force: true });
  return result;
}
