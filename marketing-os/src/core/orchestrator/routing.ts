import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { CapabilityReport, NativeSkillRunner, VendoredSkillWrapper } from '../types/dependencies.js';
import type { TaskRequest, TaskType } from '../types/tasks.js';

export interface RoutingDecision {
  taskId: string;
  taskType: TaskType;
  preferred: string[];
  chosen: string[];
  fallbacksConsidered: string[];
  rationale: string;
}

interface RoutingRegistry {
  routes: Array<{
    taskType: TaskType;
    preferredWrapperPrefixes: string[];
    nativeFallbacks: string[];
  }>;
}

export async function loadRoutingRegistry(projectRoot: string): Promise<RoutingRegistry> {
  const registryPath = path.join(projectRoot, 'src/registries/routing-policy.json');
  return JSON.parse(await readFile(registryPath, 'utf8')) as RoutingRegistry;
}

export async function routeTask(
  projectRoot: string,
  task: TaskRequest,
  capabilityReport: CapabilityReport,
  wrappers: VendoredSkillWrapper[],
  nativeSkills: NativeSkillRunner[]
): Promise<RoutingDecision> {
  const routing = await loadRoutingRegistry(projectRoot);
  const entry = routing.routes.find((route) => route.taskType === task.taskType);
  const preferred = entry?.preferredWrapperPrefixes ?? [];
  const chosenWrappers = preferred.flatMap((prefix) => wrappers.filter((wrapper) => wrapper.id.startsWith(prefix))).filter((wrapper) => {
    const dependency = capabilityReport.vendored.find((item) => item.id === wrapper.sourceDependency);
    return Boolean(dependency?.enabled && dependency.manifestValid);
  });
  const chosen = chosenWrappers.length > 0 ? chosenWrappers.map((wrapper) => wrapper.id) : (entry?.nativeFallbacks ?? []).filter((id) => nativeSkills.some((skill) => skill.id === id));
  const fallbacksConsidered = chosenWrappers.length > 0 ? entry?.nativeFallbacks ?? [] : preferred;

  return {
    taskId: task.id,
    taskType: task.taskType,
    preferred,
    chosen,
    fallbacksConsidered,
    rationale:
      chosenWrappers.length > 0
        ? `Selected vendored wrappers for ${task.taskType} because dependency integrity passed and preferred coverage exists.`
        : `Fell back to native skills for ${task.taskType} because preferred vendored wrappers were unavailable or failed readiness checks.`
  };
}
