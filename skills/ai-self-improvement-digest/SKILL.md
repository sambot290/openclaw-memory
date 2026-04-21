---
name: ai-self-improvement-digest
description: Daily AI self-improvement digest for capability growth. Use when: (1) setting up daily learning routines, (2) building AI agents that improve themselves over time, (3) curating educational content for agent development, (4) creating structured self-improvement loops. Triggers on "daily digest", "self-improvement", "learning digest", "AI newsletter". Does not handle general AI news, breaking announcements, or business/market news.
---

# AI Self-Improvement Digest

## Quick Start

Generate a daily digest of AI self-improvement material and deliver it.

**Sources to scan** (see `references/sources.md` for full list):
- Tier 1 (daily): Anthropic Engineering, Simon Willison, Geoff Huntley, X/Twitter, Hacker News, Lilian Weng
- Tier 2 (2-3x/week): Latent Space, Cursor Blog, David Crawshaw, Mitchell Hashimoto, Eugene Yan, Chip Huyen
- Tier 3 (weekly): arXiv cs.CL/cs.AI, GitHub trending AI agent repos

**Core principle:** Only content that helps improve capabilities. Exclude general AI news, model releases, business news, ethics debates.

---

## Workflow

### Step 1 — Deduplicate
Read `memory/ai-digest-posted.json`. Skip anything already posted.

### Step 2 — Scan & Filter
Use `ollama_web_search` and `ollama_web_fetch` to check sources. Filter for content that helps with:

- Harness / system prompt engineering
- Skill and tool development
- Self-evaluation and debugging
- Multi-agent coordination
- Memory and context management
- Task decomposition and workflow automation
- Reasoning and execution patterns

### Step 3 — Format (3-5 items)
For each item:
```
[Title] — [Source]
What: [1-sentence summary]
Why it matters: [How this helps capability growth]
Takeaway: [Specific pattern or experiment to try]
Relevance: [⭐ to ⭐⭐⭐⭐⭐]
```

### Step 4 — Experiment Suggestion
💡 Today's experiment: [One small thing to try]

### Step 5 — Setup Review (mandatory)
Connect findings to current setup (AGENTS.md, TOOLS.md, skills/, cron jobs, memory patterns). Make concrete, affirmative suggestions. If nothing actionable: "No changes needed today."

### Step 6 — Update Tracking
Append new items to `memory/ai-digest-posted.json` with date, title, url, topic.

---

## Sources Reference
See `references/sources.md` for full source list, priority tiers, and X/Twitter search commands.
