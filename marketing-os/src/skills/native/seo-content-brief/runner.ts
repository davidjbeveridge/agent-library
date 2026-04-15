import { createNativeSkill } from '../common.js';

export const seoContentBriefSkill = createNativeSkill({
  id: 'seo-content-brief',
  purpose: 'Produce content cluster and page brief recommendations.',
  taskTypesSupported: ['seo-content'],
  buildContent: (context, goal) => ({
    title: 'SEO Content Brief',
    content:
      '# SEO Content Brief\n\n' +
      'Goal: ' + goal + '\n\n' +
      'Project: ' + (context.projectName ?? context.projectId) + '\n\n' +
      'Current channels: ' + ((context.currentChannels ?? ['Undocumented']).join('; ')) + '\nOwned assets: ' + ((context.ownedAssets ?? ['Undocumented']).join('; ')) + '\n\nSEO brief rules:\n- Cover high-intent search problems first.\n- Use comparison, alternatives, and use-case pages when relevant.\n- Recommend internal links that move readers toward conversion.'
  })
});
