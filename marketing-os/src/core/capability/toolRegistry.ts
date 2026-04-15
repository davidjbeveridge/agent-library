import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { ToolAdapter } from '../types/tools.js';

export async function loadToolRegistry(projectRoot: string, adapters: ToolAdapter[]): Promise<ToolAdapter[]> {
  const registryPath = path.join(projectRoot, 'src/registries/tool-adapters.json');
  const raw = JSON.parse(await readFile(registryPath, 'utf8')) as { tools: Array<{ id: string; enabled: boolean }> };
  return adapters.filter((adapter) => raw.tools.some((tool) => tool.id === adapter.id && tool.enabled));
}
