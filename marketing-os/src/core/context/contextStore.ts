import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { MarketingContext } from './contextSchema.js';

export class ContextStore {
  constructor(private readonly rootDir: string) {}

  private getPath(projectId: string): string {
    return path.join(this.rootDir, `${projectId}.json`);
  }

  async load(projectId: string): Promise<MarketingContext | null> {
    try {
      const raw = await readFile(this.getPath(projectId), 'utf8');
      return JSON.parse(raw) as MarketingContext;
    } catch {
      return null;
    }
  }

  async save(context: MarketingContext): Promise<void> {
    await mkdir(this.rootDir, { recursive: true });
    await writeFile(this.getPath(context.projectId), JSON.stringify(context, null, 2));
  }
}
