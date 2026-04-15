import type { MarketingContext } from '../context/contextSchema.js';
import type { RiskFlag } from '../types/outputs.js';

export function evaluatePolicyRisks(context: MarketingContext, proposedActions: string[]): RiskFlag[] {
  const risks: RiskFlag[] = [];
  const bottlenecks = new Set(context.knownBottlenecks ?? []);
  const lowEvidence = context.evidenceQuality === 'low';

  if (proposedActions.some((action) => /spam|blast|scrape emails|fake urgency/i.test(action))) {
    risks.push({
      id: 'spammy-tactics',
      severity: 'high',
      message: 'Recommended actions include spammy or manipulative tactics.',
      mitigation: 'Remove spam-like outreach and replace it with consent-based, evidence-backed channels.'
    });
  }

  if (proposedActions.some((action) => /scale paid|increase ad budget/i.test(action)) && (bottlenecks.has('poor-conversion') || lowEvidence)) {
    risks.push({
      id: 'scale-before-readiness',
      severity: 'high',
      message: 'Paid scaling was suggested before funnel readiness was established.',
      mitigation: 'Prioritize conversion, retention, or instrumentation fixes before scaling spend.'
    });
  }

  if (lowEvidence) {
    risks.push({
      id: 'weak-evidence',
      severity: 'medium',
      message: 'Recommendations are based on weak evidence and should be treated as hypotheses.',
      mitigation: 'Add research or measurement tasks before high-cost execution.'
    });
  }

  return risks;
}
