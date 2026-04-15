import { upgradeVendoredDependency } from '../../vendoring/dependencyManager.js';

export async function runUpgradeVendored(cwd: string, dependencyId: string, targetSha?: string, apply = false): Promise<void> {
  const result = await upgradeVendoredDependency(cwd, dependencyId, { targetSha, apply });
  console.log(JSON.stringify(result, null, 2));
}
