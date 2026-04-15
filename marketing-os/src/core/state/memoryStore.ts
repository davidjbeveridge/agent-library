import { FileStore } from './fileStore.js';

export class MemoryStore extends FileStore<Record<string, unknown>> {}
