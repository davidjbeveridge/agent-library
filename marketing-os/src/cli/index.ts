import { runDetectCapabilities } from './commands/detect-capabilities.js';
import { runWorkflowCommand } from './commands/run-workflow.js';
import { runSummarizeContext } from './commands/summarize-context.js';
import { runProposeNextSteps } from './commands/propose-next-steps.js';
import { runAuditDependencies } from './commands/audit-dependencies.js';
import { runUpgradeVendored } from './commands/upgrade-vendored.js';

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);

  switch (command) {
    case 'detect-capabilities':
      await runDetectCapabilities();
      break;
    case 'run-workflow': {
      const workflowId = args[0];
      const inputFlagIndex = args.findIndex((arg) => arg === '--input');
      const inputPath = inputFlagIndex >= 0 ? args[inputFlagIndex + 1] : undefined;
      if (!workflowId || !inputPath) throw new Error('Usage: marketing-os run-workflow <workflow-id> --input <context.json>');
      await runWorkflowCommand(workflowId, inputPath);
      break;
    }
    case 'summarize-context':
      if (!args[0]) throw new Error('Usage: marketing-os summarize-context <context.json>');
      await runSummarizeContext(args[0]);
      break;
    case 'propose-next-steps':
      if (!args[0]) throw new Error('Usage: marketing-os propose-next-steps <context.json>');
      await runProposeNextSteps(args[0]);
      break;
    case 'audit-vendored-dependencies':
      await runAuditDependencies();
      break;
    case 'upgrade-vendored-dependency': {
      const dependencyId = args[0];
      const shaFlagIndex = args.findIndex((arg) => arg === '--sha');
      const targetSha = shaFlagIndex >= 0 ? args[shaFlagIndex + 1] : undefined;
      const apply = args.includes('--apply');
      if (!dependencyId) throw new Error('Usage: marketing-os upgrade-vendored-dependency <dependency-id> [--sha <sha>] [--apply]');
      await runUpgradeVendored(process.cwd(), dependencyId, targetSha, apply);
      break;
    }
    default:
      throw new Error(`Unknown command: ${command}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
