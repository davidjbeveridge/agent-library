import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';

export const marketDevtoolWorkflow: WorkflowDefinition = {
  id: 'market-devtool',
  title: 'Market Devtool',
  description: 'Frame developer audience, onboarding, docs, community, and launch priorities.',
  defaultBusinessModel: 'developer-tools',
  steps: [
    { id: 'devtool-context', taskType: 'context-synthesis', category: 'strategy', goal: 'Normalize developer tools context and GTM motion.' },
    { id: 'devtool-audience', taskType: 'audience-research', category: 'strategy', goal: 'Clarify developer audience segments and triggers.' },
    { id: 'devtool-positioning', taskType: 'positioning', category: 'strategy', goal: 'Create developer-tool positioning and proof map.' },
    { id: 'devtool-seo', taskType: 'seo-content', category: 'execution', goal: 'Recommend docs, content, and community-backed search priorities.' }
  ]
};
