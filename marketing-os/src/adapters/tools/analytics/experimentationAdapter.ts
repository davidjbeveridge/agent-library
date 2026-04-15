import { createToolAdapter } from '../common.js';

export const experimentationAdapter = createToolAdapter({
  id: 'experimentation',
  category: 'analytics',
  capabilities: ['experiment reads', 'experiment writes'],
  authRequirements: ['EXPERIMENTATION_API_KEY'],
  readWriteScope: 'read-write',
  setupText: 'Configure experimentation credentials for experiment reads and controlled writes.',
  envVars: ['EXPERIMENTATION_API_KEY']
});
