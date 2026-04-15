import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';

export const marketLocalServiceWorkflow: WorkflowDefinition = {
  id: 'market-local-service',
  title: 'Market Local Service',
  description: 'Prioritize demand capture, offer clarity, trust signals, and local channel recommendations.',
  defaultBusinessModel: 'local-service',
  steps: [
    { id: 'local-context', taskType: 'context-synthesis', category: 'strategy', goal: 'Normalize the local service context and priorities.' },
    { id: 'local-audience', taskType: 'audience-research', category: 'strategy', goal: 'Clarify local buyer needs and buying triggers.' },
    { id: 'local-positioning', taskType: 'positioning', category: 'strategy', goal: 'Create locally relevant positioning and offer framing.' },
    { id: 'local-landing', taskType: 'landing-page-audit', category: 'analysis', goal: 'Improve local landing page clarity and trust signals.' },
    { id: 'local-next', taskType: 'next-step-prioritization', category: 'iteration', goal: 'Rank the next local service growth actions.' }
  ]
};
