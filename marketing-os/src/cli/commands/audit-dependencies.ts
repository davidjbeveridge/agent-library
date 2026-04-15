import { auditVendoredDependencies } from '../../vendoring/dependencyManager.js';

export async function runAuditDependencies(cwd = process.cwd()): Promise<void> {
  const result = await auditVendoredDependencies(cwd);
  console.log(JSON.stringify(result, null, 2));
}
