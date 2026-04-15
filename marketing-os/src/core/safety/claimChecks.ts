import type { OutputArtifact } from '../types/outputs.js';

const forbiddenMetricClaims = [/\b\d+(?:\.\d+)?%\s+(increase|lift|conversion|ctr|roas|cac)\b/i, /\bmarket share\b/i];

export function detectUnsupportedClaims(artifacts: OutputArtifact[]): string[] {
  const findings: string[] = [];
  for (const artifact of artifacts) {
    for (const pattern of forbiddenMetricClaims) {
      if (pattern.test(artifact.content)) {
        findings.push(`Artifact ${artifact.id} may contain unsupported quantified claims.`);
      }
    }
  }
  return findings;
}
