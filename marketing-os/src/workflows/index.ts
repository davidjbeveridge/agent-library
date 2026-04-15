import type { WorkflowDefinition } from '../core/orchestrator/workflowEngine.js';
import { launchSaasWorkflow } from './launch-saas.js';
import { marketLocalServiceWorkflow } from './market-local-service.js';
import { marketEcommerceWorkflow } from './market-ecommerce.js';
import { marketDevtoolWorkflow } from './market-devtool.js';
import { reviveStagnantProductWorkflow } from './revive-stagnant-product.js';

export const workflows: WorkflowDefinition[] = [
  launchSaasWorkflow,
  marketLocalServiceWorkflow,
  marketEcommerceWorkflow,
  marketDevtoolWorkflow,
  reviveStagnantProductWorkflow
];

export function getWorkflow(id: string): WorkflowDefinition | undefined {
  return workflows.find((workflow) => workflow.id === id);
}
