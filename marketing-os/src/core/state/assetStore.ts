import { FileStore } from './fileStore.js';

export class AssetStore extends FileStore<Record<string, unknown>> {}
