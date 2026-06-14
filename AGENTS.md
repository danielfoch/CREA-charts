# AGENTS.md - CREA Charts

Use this repo when Dan asks for CREA charts, Canadian housing market charts, market comparisons, city price charts, leaderboard pulls, or visuals for a CREA update.

## Default Route

Use the zero-setup HTTP API first:

```text
https://crea-stats-explorer.vercel.app
```

Read the live API reference when available:

```text
https://crea-stats-explorer.vercel.app/AGENTS.md
```

## Definition Of Done

A chart request is done only when you return:

1. The PNG chart URL.
2. The matching interactive URL.
3. Any assumption about geography slugs, metric, base period, or date range.

If you cannot verify a geography slug, first check:

```text
https://crea-stats-explorer.vercel.app/data/manifest.json
```

## Chart URL Pattern

```text
https://crea-stats-explorer.vercel.app/api/chart?view=<view>&g=<comma-separated-slugs>&m=<metric>&base=<YYYYMM>
```

Common example:

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201
```

Matching interactive link:

```text
https://crea-stats-explorer.vercel.app/compare?g=toronto,calgary&m=ap&base=202201
```

## Defaults

- Default view: `compare`
- Default metric for price questions: `ap`
- Default base for rate-hike-cycle charts: `202201`
- Return RE/MAX-style colors only if the API supports the requested style parameter or the downstream renderer can restyle it.

## Useful Prompts

- "Chart Toronto vs Vancouver vs Calgary average price since Jan 2022."
- "Which Canadian markets are furthest below their 2022 peak? Make a leaderboard."
- "Plot Canadian home prices against the 5-year mortgage rate inverted."
- "Make a CREA update chart for Kitchener-Waterloo, London, Niagara, Kelowna, Chilliwack, and Victoria."

## MCP Route

For Claude Code or Claude Desktop, prefer MCP only when the local `crea-stats-explorer` repo is cloned and dependencies are installed:

```json
{
  "mcpServers": {
    "crea-housing-stats": {
      "command": "node",
      "args": ["/Users/danielfoch/crea-stats-explorer/mcp/server.mjs"]
    }
  }
}
```

MCP tools may include `search_geographies`, `get_housing_series`, `get_macro_series`, `get_leaderboard`, `get_property_type_series`, `get_chart`, and `get_overview`.

## CLI Route

If the local app repo is available:

```bash
cd crea-stats-explorer
node bin/crea-stats.mjs chart "view=compare&g=toronto,calgary&m=ap&base=202201" -o chart.png
node bin/crea-stats.mjs leaderboard ap --top 10
```

## Guardrails

- Do not invent market slugs.
- Do not call the work done with only a description. Return a chart URL or a clear blocker.
- For static macro images, explain that the interactive link is the better artifact when dual axes matter.
- Keep the output concise. Dan wants the chart, the link, and the point.

