import { FileStore } from './fileStore.js';

export class MetricsStore extends FileStore<Record<string, unknown>> {}
