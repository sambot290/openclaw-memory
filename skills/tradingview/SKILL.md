---
name: tradingview
description: Control and read TradingView Desktop via Chrome DevTools Protocol (CDP). Use when: (1) writing or debugging Pine Script indicators, (2) reading chart state (symbol, timeframe, indicators, OHLCV, Pine drawings), (3) managing price alerts, (4) controlling chart navigation (symbol, timeframe, zoom, replay), (5) drawing trend lines and shapes, (6) taking screenshots of charts for analysis, (7) streaming live price/study data from a running chart. Requires TradingView Desktop running with --remote-debugging-port=9222. Does NOT handle: web TradingView, TradingView via browser, real trading execution.
---

# TradingView Skill

## Connection Setup

**TradingView Desktop must be running with debug port:**

```bash
open -a TradingView --args --remote-debugging-port=9222
```

Or use the launch script:
```bash
~/tradingview-mcp/scripts/launch_tv_debug_mac.sh
```

**MCP config** (`~/.openclaw/openclaw.json`):
```json
{
  "mcpServers": {
    "tradingview": {
      "command": "node",
      "args": ["/Users/sam/tradingview-mcp/src/server.js"]
    }
  }
}
```

Verify connection:
```
tv health
```

---

## Tool Reference

See `references/tools.md` for the full tool reference (78 tools).

### Common Workflows

**Analyze current chart:**
1. `chart_get_state` — symbol, timeframe, all indicator names/IDs
2. `data_get_study_values` — current RSI, MACD, BB, EMA values
3. `data_get_pine_lines` — support/resistance levels from Pine indicators
4. `data_get_ohlcv summary=true` — compact price stats (last 5 bars)

**Pine Script development:**
1. `pine_set_source` — inject code into editor
2. `pine_smart_compile` — compile with auto-detection
3. `pine_get_errors` — read errors if any
4. `pine_get_console` — read log.info() output

**Change symbol/timeframe:**
1. `chart_set_symbol` — change ticker
2. `chart_set_timeframe` — change resolution (1, 5, 15, 60, D, W, M)

**Draw on chart:**
1. `draw_shape` — horizontal_line, trend_line, rectangle, text
2. `draw_list` — list all drawings
3. `draw_remove_one` — remove specific drawing

**Manage alerts:**
1. `alert_list` — list all alerts
2. `alert_create` — create price alert
3. `alert_delete` — delete alert

**Screenshots:**
- `capture_screenshot region=chart` — capture the chart region

---

## CLI Reference

Every MCP tool is also available as a CLI command:
```bash
tv status           # check connection
tv quote            # current price
tv ohlcv --summary  # compact OHLCV stats
tv pine compile     # compile Pine Script
tv screenshot -r chart
tv stream quote     # live price streaming
```

Full command list: `tv --help`
