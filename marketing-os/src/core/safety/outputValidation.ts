import type { OutputArtifact, RiskFlag } from '../types/outputs.js';
import { detectUnsupportedClaims } from './claimChecks.js';

export interface OutputValidationResult {
  valid: boolean;
  risks: RiskFlag[];
}

export function validateOutputs(artifacts: OutputArtifact[]): OutputValidationResult {
  const risks: RiskFlag[] = detectUnsupportedClaims(artifacts).map((message, index) => ({
    id: `unsupported-claim-${index + 1}`,
    severity: 'medium',
    message,
    mitigation: 'Replace the claim with an evidence-backed statement or label it as a hypothesis.'
  }));

  return {
    valid: risks.length === 0,
    risks
  };
}
