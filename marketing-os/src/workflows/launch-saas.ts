import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';

export const launchSaasWorkflow: WorkflowDefinition = {
  id: 'launch-saas',
  title: 'Launch SaaS',
  description: 'Synthesize context, sharpen positioning, recommend channels, and build an initial experiment backlog for a SaaS launch.',
  defaultBusinessModel: 'saas',
  steps: [
    { id: 'launch-saas-context', taskType: 'context-synthesis', category: 'strategy', goal: 'Build a launch-ready SaaS marketing context.' },
    { id: 'launch-saas-audience', taskType: 'audience-research', category: 'strategy', goal: 'Clarify SaaS ICPs, pains, and triggers.' },
    { id: 'launch-saas-positioning', taskType: 'positioning', category: 'strategy', goal: 'Draft differentiated SaaS positioning for launch.' },
    { id: 'launch-saas-seo', taskType: 'seo-content', category: 'execution', goal: 'Create SaaS launch page and content priorities.' },
    { id: 'launch-saas-experiments', taskType: 'experiment-backlog', category: 'iteration', goal: 'Generate the first launch experiment backlog.' }
  ]
};
