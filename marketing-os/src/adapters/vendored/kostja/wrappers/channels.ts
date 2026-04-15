import { createVendoredWrapper } from '../../common.js';

export const channelsWrapper = createVendoredWrapper({
  id: 'kostja-channels',
  sourceDependency: 'kostja94-marketing-skills',
  purpose: 'Adapt strategy into channel-specific asset directions.',
  taskTypesSupported: ['social-execution', 'paid-acquisition'],
  businessModelsSupported: ['saas', 'plg', 'ecommerce', 'local-service', 'agency', 'b2b-service', 'developer-tools', 'info-product', 'open-source-hybrid', 'unknown'],
  outputKinds: ['backlog'],
  strengthScore: 7,
  executionReadinessRules: ['dependency manifest valid'],
  playbookPath: 'skills/channels/distribution/distribution-channels/SKILL.md',
  formatter: (context, goal) => ({
    title: 'Channel adaptation backlog',
    content: `# Channel Backlog\n\nGoal: ${goal}\n\nCurrent channels: ${(context.currentChannels ?? ['Undocumented']).join('; ')}\nHistorical channels: ${(context.historicalChannels ?? ['Undocumented']).join('; ')}\n\nChannel rules:\n- Keep the core angle stable while adapting format and CTA by channel.\n- Start with channels already adjacent to the audience and proof you have.\n- Avoid broad channel expansion before repeatable signal exists.`
  })
});
