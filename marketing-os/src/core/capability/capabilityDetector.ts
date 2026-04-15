import path from 'node:path';
import { deriveExecutionMode } from './executionModes.js';
import { loadDependencyRegistry } from './dependencyRegistry.js';
import { loadToolRegistry } from './toolRegistry.js';
import type { CapabilityReport, VendoredSkillWrapper } from '../types/dependencies.js';
import type { ToolAdapter } from '../types/tools.js';

export class CapabilityDetector {
  constructor(
    private readonly projectRoot: string,
    private readonly wrappers: VendoredSkillWrapper[],
    private readonly toolAdapters: ToolAdapter[]
  ) {}

  async detect(): Promise<CapabilityReport> {
    const vendored = await loadDependencyRegistry(this.projectRoot);
    const tools = await loadToolRegistry(this.projectRoot, this.toolAdapters);

    const toolReports = await Promise.all(
      tools.map(async (tool) => {
        const detected = await tool.detect();
        const health = detected.available ? await tool.healthCheck() : { healthy: false, reason: detected.reason };
        return {
          id: tool.id,
          available: detected.available,
          healthy: health.healthy,
          readWrite: tool.readWriteScope,
          reason: detected.reason ?? health.reason
        };
      })
    );

    const vendoredReports = vendored.map((dependency) => {
      const wrappers = this.wrappers.filter((wrapper) => wrapper.sourceDependency === dependency.id);
      return {
        ...dependency,
        wrappersReady: wrappers.length,
        missingWrappers: wrappers.length === 0 ? ['no wrappers registered'] : []
      };
    });

    const executionMode = deriveExecutionMode({ vendored: vendoredReports, tools: toolReports });
    const missingCapabilities = [
      ...vendoredReports.filter((dependency) => !dependency.manifestValid).map((dependency) => `${dependency.id} integrity check failed`),
      ...toolReports.filter((tool) => !tool.available).map((tool) => `${tool.id} not configured`)
    ];

    return {
      executionMode,
      vendored: vendoredReports,
      tools: toolReports,
      missingCapabilities,
      recommendedSetups: toolReports.filter((tool) => !tool.available).map((tool) => `Configure ${tool.id} to unlock ${tool.id} capabilities.`)
    };
  }

  static defaultProjectRoot(): string {
    return path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../..');
  }
}
