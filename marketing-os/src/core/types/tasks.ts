import type { BusinessModel } from './shared.js';

export type TaskCategory = 'strategy' | 'execution' | 'analysis' | 'reporting' | 'iteration';

export type TaskType =
  | 'context-synthesis'
  | 'competitor-research'
  | 'audience-research'
  | 'positioning'
  | 'landing-page-audit'
  | 'experiment-backlog'
  | 'seo-content'
  | 'paid-acquisition'
  | 'social-execution'
  | 'lifecycle'
  | 'reporting-summary'
  | 'next-step-prioritization'
  | 'workflow';

export interface TaskRequest {
  id: string;
  taskType: TaskType;
  category: TaskCategory;
  goal: string;
  businessModel?: BusinessModel;
  priority?: 'low' | 'medium' | 'high';
  constraints?: string[];
  requestedOutputs?: string[];
}
