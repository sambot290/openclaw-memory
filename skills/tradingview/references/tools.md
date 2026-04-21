# TradingView Tool Reference (78 MCP tools)

## Connection
| Tool | Description |
|------|-------------|
| `tv_launch` | Launch TradingView with debug port (auto-detects install path) |
| `tv_health_check` | Verify CDP connection to TradingView Desktop |
| `tv_discover` | List all open TradingView tabs and their state |

## Chart Reading
| Tool | Description |
|------|-------------|
| `chart_get_state` | Symbol, timeframe, all indicator names + IDs (~500B) |
| `data_get_study_values` | RSI, MACD, BB, EMA values from all visible indicators |
| `quote_get` | Latest price, OHLC, volume (~200B) |
| `data_get_ohlcv summary=true` | Compact stats + last 5 bars (use summary=true to save context) |
| `data_get_ohlcv summary=false` | Full OHLCV data for last N bars |

## Pine Drawings (from custom indicators)
| Tool | Description |
|------|-------------|
| `data_get_pine_lines` | Horizontal price levels (support/resistance, session levels) |
| `data_get_pine_labels` | Text annotations + prices ("PDH 24550", "Bias Long") |
| `data_get_pine_tables` | Session stats tables (analytics dashboards) |
| `data_get_pine_boxes` | Price zones as {high, low} pairs |

**Always use `study_filter`** to target a specific indicator.

## Chart Control
| Tool | Description |
|------|-------------|
| `chart_set_symbol` | Change ticker (BTCUSD, AAPL, ES1!, NYMEX:CL1!) |
| `chart_set_timeframe` | Change resolution (1, 5, 15, 60, D, W, M) |
| `chart_set_type` | Change style (Candles, HeikinAshi, Line, Area, Renko) |
| `chart_scroll_to_date` | Jump to date (ISO: "2025-01-15") |
| `chart_set_visible_range` | Zoom to exact unix range |
| `symbol_info` | Symbol metadata |
| `symbol_search` | Search symbols |

## Indicators
| Tool | Description |
|------|-------------|
| `chart_manage_indicator` | Add/remove indicators (use full names) |
| `indicator_set_inputs` | Change indicator settings |
| `indicator_toggle_visibility` | Show/hide indicator |
| `indicator_get` | Read indicator configuration |

## Pine Script Development
| Tool | Description |
|------|-------------|
| `pine_set_source` | Inject code into Pine Editor |
| `pine_smart_compile` | Compile with auto-detection + error check |
| `pine_get_errors` | Read compilation errors |
| `pine_get_console` | Read log.info() output from indicator |
| `pine_save` | Save to TradingView cloud |
| `pine_get_source` | Read current script |
| `pine_new` | Create blank indicator/strategy/library |
| `pine_open` / `pine_list_scripts` | Open or list saved scripts |
| `pine_analyze` | Offline static analysis (no chart needed) |
| `pine_check` | Server-side compile check (no chart needed) |

## Drawing
| Tool | Description |
|------|-------------|
| `draw_shape` | Draw horizontal_line, trend_line, rectangle, text |
| `draw_list` | List all drawings |
| `draw_remove_one` | Remove specific drawing by ID |
| `draw_clear` | Clear all drawings |

## Alerts
| Tool | Description |
|------|-------------|
| `alert_list` | List all alerts |
| `alert_create` | Create price alert |
| `alert_delete` | Delete alert |

## Multi-Pane Layouts
| Tool | Description |
|------|-------------|
| `pane_list` | List all panes with symbols and active state |
| `pane_set_layout` | Set grid (s, 2h, 2v, 2x2, 4, 6, 8) |
| `pane_focus` | Focus specific pane by index |
| `pane_set_symbol` | Set symbol on any pane |

## Replay Mode
| Tool | Description |
|------|-------------|
| `replay_start` | Enter replay at date |
| `replay_step` | Advance one bar |
| `replay_autoplay` | Auto-advance at speed (ms) |
| `replay_trade` | Buy/sell/close positions |
| `replay_status` | Check position, P&L, date |
| `replay_stop` | Return to realtime |

## Watchlist
| Tool | Description |
|------|-------------|
| `watchlist_get` | Read watchlist |
| `watchlist_add` | Add symbol to watchlist |

## Screenshot
| Tool | Description |
|------|-------------|
| `capture_screenshot` | Screenshot (region: full, chart, strategy_tester) |

## Layout / Tabs
| Tool | Description |
|------|-------------|
| `layout_list` | List saved layouts |
| `layout_switch` | Switch to saved layout |
| `tab_list` | List open chart tabs |
| `tab_new` / `tab_close` | Open/close tabs |
| `tab_switch` | Switch to tab by index |

## Streaming (poll-and-diff on localhost)
| Tool | Description |
|------|-------------|
| `stream quote` | Live price tick monitoring |
| `stream bars` | Bar-by-bar updates |
| `stream values` | Indicator value monitoring |
| `stream lines --filter "Name"` | Price level monitoring |
| `stream tables --filter "Name"` | Table data monitoring |
| `stream all` | All panes at once (multi-symbol) |

## UI Automation
| Tool | Description |
|------|-------------|
| `ui_click` | Click at x,y |
| `ui_keyboard` | Send keyboard event |
| `ui_evaluate` | Execute JS in TradingView page context |
| `ui_open_panel` | Open panel |
| `ui_scroll` | Scroll |

## Batch / Multi-Symbol
| Tool | Description |
|------|-------------|
| `batch_run` | Run action across multiple symbols/timeframes |
