# Sources Reference

## Source Priority

| Source | Priority | Focus |
|--------|----------|-------|
| Anthropic Engineering (anthropic.com/engineering) | ⭐⭐⭐ | Harness design, evals, multi-agent |
| Simon Willison (simonwillison.net) | ⭐⭐⭐ | Practical patterns, tools |
| Geoff Huntley (ghuntley.com) | ⭐⭐⭐ | Agent philosophy, MCP |
| X/Twitter (via x-research skill) | ⭐⭐⭐ | Real-time practitioner insights |
| Hacker News (news.ycombinator.com AI/agent threads) | ⭐⭐⭐ | High-signal AI/agent discussions |
| Lilian Weng (lilianweng.github.io) | ⭐⭐⭐ | Deep technical AI, agent architectures |
| Latent Space (latent.space) | ⭐⭐ | Industry depth, interviews |
| Cursor Blog (cursor.com/blog) | ⭐⭐ | Coding agent patterns |
| David Crawshaw (crawshaw.io) | ⭐⭐ | Agent experience reports |
| Mitchell Hashimoto (mitchellh.com) | ⭐⭐ | Practical engineering |
| Eugene Yan (eugeneyan.com) | ⭐⭐ | ML systems, production patterns |
| Chip Huyen (huyenchip.com) | ⭐⭐ | ML systems design |
| arXiv cs.CL/cs.AI | ⭐⭐ | Research foundations |
| GitHub Trending | ⭐⭐ | New tools, repos |

## X/Twitter Search Commands

```bash
cd ~/clawd/skills/x-research
bun run x-search.ts search "AI agents harness" --quick --quality
bun run x-search.ts search "MCP server" --quick --quality
bun run x-search.ts search "from:simonw" --quick
bun run x-search.ts search "from:geoffreylitt" --quick
```

Focus on: Practical implementation insights, harness/prompt engineering patterns, tool and skill development discussions, multi-agent coordination experiences, links to detailed writeups.

## Content Categories

1. **Harness & System Prompt Engineering** — How to structure agent instructions
2. **Skill & Tool Development** — New tools, MCP servers, integration patterns
3. **Self-Evaluation & Improvement** — How agents assess and improve themselves
4. **Multi-Agent Coordination** — Spawning, supervising, merging work
5. **Memory & Context Management** — RAG, long-term memory, compaction
6. **Workflow Automation** — Task decomposition, failure handling
7. **Foundational Research** — Academic work on agent capabilities

## Tracking File

Location: `memory/ai-digest-posted.json`

```json
{
  "posted": [],
  "experiments": [],
  "skillsEvaluated": [],
  "setupChanges": []
}
```

## Experiment Log Entry Format

```json
{
  "date": "YYYY-MM-DD",
  "fromArticle": "article-slug",
  "experiment": "What you tried",
  "outcome": "Result",
  "learned": "What you learned"
}
```
