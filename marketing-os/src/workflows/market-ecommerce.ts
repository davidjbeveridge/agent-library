import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';

export const marketEcommerceWorkflow: WorkflowDefinition = {
  id: 'market-ecommerce',
  title: 'Market Ecommerce',
  description: 'Synthesize offer, pricing, objections, and paid plus retention priorities for ecommerce.',
  defaultBusinessModel: 'ecommerce',
  steps: [
    { id: 'ecommerce-context', taskType: 'context-synthesis', category: 'strategy', goal: 'Normalize ecommerce offer and category context.' },
    { id: 'ecommerce-positioning', taskType: 'positioning', category: 'strategy', goal: 'Clarify ecommerce differentiation and offer framing.' },
    { id: 'ecommerce-paid', taskType: 'paid-acquisition', category: 'execution', goal: 'Generate ecommerce paid acquisition angles and hooks.' },
    { id: 'ecommerce-lifecycle', taskType: 'lifecycle', category: 'execution', goal: 'Recommend ecommerce retention and lifecycle improvements.' }
  ]
};
