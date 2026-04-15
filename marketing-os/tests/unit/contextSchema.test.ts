import { describe, expect, it } from 'vitest';
import { MarketingContextSchema, MarketingContextUpdateSchema } from '../../src/core/context/contextSchema.js';
import { normalizeMarketingContext } from '../../src/core/context/contextNormalizer.js';

describe('MarketingContext schema', () => {
  it('accepts partial context updates', () => {
    const parsed = MarketingContextUpdateSchema.parse({ projectId: 'demo', businessModel: 'saas' });
    expect(parsed.projectId).toBe('demo');
    expect(parsed.businessModel).toBe('saas');
  });

  it('normalizes minimal seed input', () => {
    const normalized = normalizeMarketingContext({ projectId: 'demo' });
    expect(normalized.projectId).toBe('demo');
    expect(normalized.businessModel).toBe('unknown');
    expect(MarketingContextSchema.parse(normalized)).toBeTruthy();
  });
});
