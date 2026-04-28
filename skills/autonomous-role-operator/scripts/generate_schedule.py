#!/usr/bin/env python3
"""Generate a staggered role-operator automation schedule.

This script is intentionally dependency-free. It emits a role-agnostic schedule
that Codex can adapt before creating Codex Automations.
"""

from __future__ import annotations

import argparse
import json
from dataclasses import dataclass, asdict
from typing import Iterable


@dataclass(frozen=True)
class Job:
    name: str
    days: str
    time: str
    runtime_minutes: int
    family: str
    purpose: str


MICRO_TIMES = [
    ("Fast Signal Sweep", ":02,:32", 4, "micro", "Refresh fast-changing sources and detect urgent signals."),
    ("Meeting Prep Lookahead", ":08,:38", 6, "micro", "Prepare briefs for upcoming high-value meetings."),
    ("Post-Meeting Follow-Through", ":15,:45", 7, "micro", "Capture decisions, tasks, and changed assumptions after meetings."),
    ("Self-Improvement Light Pass", ":24,:54", 4, "micro", "Improve local/private system artifacts and lightly detect role drift."),
]

DAILY_JOBS = [
    ("Cloud Manifest Preflight", "05:27", 6, "daily", "Verify cloud doc IDs, permissions, mirrors, and publish queue."),
    ("Source Auth And Lock Preflight", "05:35", 8, "daily", "Verify connectors, source health, and stale locks."),
    ("Overnight Context Ingest", "05:47", 16, "daily", "Ingest overnight source deltas and expire stale facts."),
    ("Control Plane Full Reconcile", "06:06", 14, "daily", "Reconcile active work, owners, milestones, and confidence."),
    ("Risk Decision Follow-Up Reconcile", "06:22", 11, "daily", "Update risk, decision, and follow-up registers."),
    ("Daily Operating Brief Build", "06:35", 10, "daily", "Build the user's daily operating brief."),
    ("Meeting Day Planner", "06:47", 8, "daily", "Classify meetings and prepare agenda/brief work."),
    ("Morning System Improvement Deep Pass", "06:57", 8, "daily", "Implement safe local improvements found overnight."),
    ("Emergency Mode Watchdog", "07:26", 6, "daily", "Detect emergencies and suppress lower-priority work if needed."),
    ("Midday Control Plane Delta", "11:31", 10, "daily", "Refresh active-work deltas from the morning."),
    ("Midday Follow-Up Sweep", "11:43", 8, "daily", "Capture morning follow-ups and decisions."),
    ("Leadership Narrative Delta", "11:53", 6, "daily", "Update stakeholder narrative from recent changes."),
    ("Midday System Improvement Medium Pass", "12:02", 5, "daily", "Tune local prompts, templates, scans, and queues."),
    ("Cloud Doc Delta Publish", "12:09", 8, "daily", "Publish approved cloud doc deltas and refresh mirrors."),
    ("Role Drift And Change-Agent Scan", "15:31", 12, "daily", "Detect role/org changes and mutate the operating system when safe."),
    ("End-Of-Day Follow-Through Capture", "16:31", 13, "daily", "Capture afternoon outcomes and drafts."),
    ("End-Of-Day Risk And Decision Update", "16:46", 9, "daily", "Reconcile risks and decisions before next day."),
    ("Daily Digest And Narrative Update", "16:57", 8, "daily", "Write digest and update stakeholder narrative."),
    ("Durable Memory And Ops State Sync", "17:09", 6, "daily", "Persist private memory and source state."),
    ("Daily System Improvement Deep Pass", "17:18", 9, "daily", "Implement safe local improvements from the day."),
    ("Cloud Doc Publish And Mirror Sync", "17:31", 12, "daily", "Publish approved updates and sync cloud/local mirrors."),
    ("Workday Handoff Snapshot", "18:58", 6, "daily", "Record final state and next-day open loops."),
]

WEEKLY_JOBS = [
    ("Weekly Portfolio Strategy Reset", "Monday", "08:05", 20, "weekly", "Reset role portfolio and strategic focus."),
    ("Weekly Stakeholder/Delegation Planner", "Monday", "08:29", 16, "weekly", "Plan stakeholder, delegation, and leverage moves."),
    ("Workstream Operator Dispatch", "Monday", "08:49", 25, "weekly", "Run active time-bound workstream operators."),
    ("Weekly System Opportunity Scan", "Monday", "09:18", 8, "weekly", "Find system-improvement opportunities."),
    ("Cloud Operating Docs Architecture Review", "Monday", "09:31", 18, "weekly", "Review cloud doc architecture, permissions, and manifests."),
    ("Professional Risk And Quality Gate Review", "Tuesday", "08:05", 25, "weekly", "Review role-specific risks and quality gates."),
    ("Throughput And Workflow Diagnostic", "Tuesday", "08:34", 22, "weekly", "Detect workflow bottlenecks."),
    ("AI Operating Leverage Review", "Tuesday", "09:01", 16, "weekly", "Improve AI-enabled role workflows."),
    ("Automation Mutation Review", "Tuesday", "09:22", 20, "weekly", "Mutate automations based on role drift and system learning."),
    ("Customer/Business/Outcome Signal Deep Scan", "Wednesday", "08:05", 24, "weekly", "Connect work to outcomes and external signals."),
    ("Strategy Assumptions Refresh", "Wednesday", "08:33", 18, "weekly", "Refresh role strategy assumptions."),
    ("Operating Topology Delta Scan", "Wednesday", "08:55", 18, "weekly", "Review ownership, interfaces, and system shape."),
    ("Role Drift And Operating Model Mutation Review", "Wednesday", "09:17", 22, "weekly", "Apply operating-model changes based on changed role/org signals."),
    ("Stakeholder Narrative Deep Draft", "Thursday", "08:05", 22, "weekly", "Draft weekly stakeholder narrative."),
    ("Packet Validation", "Thursday", "08:32", 16, "weekly", "Validate facts, sensitivity, and asks."),
    ("Approval Queue Grooming", "Thursday", "08:52", 14, "weekly", "Clean staged approval-required actions."),
    ("Org Change Proposal Builder", "Thursday", "09:09", 24, "weekly", "Draft bounded org-change experiments and stakeholder artifacts."),
    ("Weekly Stakeholder Packet Final", "Friday", "08:05", 20, "weekly", "Finalize weekly stakeholder packet."),
    ("Weekly System Retrospective", "Friday", "08:31", 25, "weekly", "Review system performance and noise."),
    ("Skill And Automation Improvement Implementation", "Friday", "09:03", 30, "weekly", "Implement safe local system improvements."),
    ("Archive And Backlog Cleanup", "Friday", "09:40", 15, "weekly", "Archive stale private state and clean backlog."),
    ("Cloud Doc Weekly Publish And Diff Audit", "Friday", "10:01", 18, "weekly", "Audit cloud/local drift and publish approved fixes."),
]

MONTHLY_JOBS = [
    ("Full Strategy And Operating Topology Review", "First Monday monthly", "13:07", 55, "monthly", "Deep role strategy and operating topology review."),
    ("Stakeholder/Delegation/Capacity Review", "First Monday monthly", "14:12", 33, "monthly", "Review stakeholder map, delegation, and capacity."),
    ("Operating Model And Org Change Portfolio Review", "First Wednesday monthly", "13:07", 55, "monthly", "Review role drift and org-change portfolio."),
    ("Cloud Docs Governance And Audience Review", "First Wednesday monthly", "14:12", 33, "monthly", "Review cloud doc governance, audience, and stale docs."),
    ("Quality Risk And Policy Review", "First Friday monthly", "13:07", 45, "monthly", "Review quality, risk, and policy system."),
    ("Role Strategy Refresh", "First business day quarterly", "14:07", 75, "quarterly", "Refresh long-horizon role strategy."),
    ("Automation And Skill Architecture Reset", "First business day quarterly", "15:31", 45, "quarterly", "Reset automation and skill architecture based on role/org change."),
]


def build_jobs(profile: str) -> list[Job]:
    jobs: list[Job] = []
    if profile in {"maximal", "core"}:
        for name, times, runtime, family, purpose in MICRO_TIMES:
            jobs.append(Job(name, "Monday-Friday", times, runtime, family, purpose))
        for name, time, runtime, family, purpose in DAILY_JOBS:
            jobs.append(Job(name, "Monday-Friday", time, runtime, family, purpose))
    if profile == "maximal":
        for name, day, time, runtime, family, purpose in WEEKLY_JOBS:
            jobs.append(Job(name, day, time, runtime, family, purpose))
        for name, cadence, time, runtime, family, purpose in MONTHLY_JOBS:
            jobs.append(Job(name, cadence, time, runtime, family, purpose))
    return jobs


def markdown(jobs: Iterable[Job]) -> str:
    lines = [
        "| Job | Days/Cadence | Time | Runtime | Family | Purpose |",
        "|---|---|---:|---:|---|---|",
    ]
    for job in jobs:
        lines.append(
            f"| {job.name} | {job.days} | {job.time} | {job.runtime_minutes} min | {job.family} | {job.purpose} |"
        )
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile", choices=["core", "maximal"], default="maximal")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    args = parser.parse_args()

    jobs = build_jobs(args.profile)
    if args.format == "json":
        print(json.dumps([asdict(job) for job in jobs], indent=2))
    else:
        print(markdown(jobs))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
