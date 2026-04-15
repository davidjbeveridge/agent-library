import { FileStore } from './fileStore.js';

export class ExperimentStore extends FileStore<Record<string, unknown>> {}
