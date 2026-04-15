import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';

export const reviveStagnantProductWorkflow: WorkflowDefinition = {
  id: 'revive-stagnant-product',
  title: 'Revive Stagnant Product',
  description: 'Diagnose bottlenecks, propose measurement fixes, and prioritize the next experiments.',
  defaultBusinessModel: 'unknown',
  steps: [
    { id: 'stagnant-context', taskType: 'context-synthesis', category: 'analysis', goal: 'Refresh the current context and constraints for the stagnant product.' },
    { id: 'stagnant-landing', taskType: 'landing-page-audit', category: 'analysis', goal: 'Audit the funnel or page experience for the stagnant product.' },
    { id: 'stagnant-report', taskType: 'reporting-summary', category: 'reporting', goal: 'Summarize current learnings and unknowns.' },
    { id: 'stagnant-next', taskType: 'next-step-prioritization', category: 'iteration', goal: 'Prioritize the highest-leverage recovery actions.' }
  ]
};
