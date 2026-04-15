import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export class FileStore<T> {
  constructor(private readonly rootDir: string, private readonly namespace: string) {}

  private filePath(id: string): string {
    return path.join(this.rootDir, this.namespace, `${id}.json`);
  }

  async load(id: string): Promise<T | null> {
    try {
      const raw = await readFile(this.filePath(id), 'utf8');
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async save(id: string, value: T): Promise<void> {
    const filePath = this.filePath(id);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
  }
}
