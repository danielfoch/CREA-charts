# CREA Charts

Agent-friendly instructions and examples for pulling Canadian housing charts from the live CREA Stats Explorer API.

Live API:

https://crea-stats-explorer.vercel.app

Full agent reference:

https://crea-stats-explorer.vercel.app/AGENTS.md

## Fastest Path

Build a chart URL and return both:

- the PNG image URL
- the matching interactive link

Example PNG:

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,vancouver,calgary&m=ap&base=202201
```

Matching interactive view:

```text
https://crea-stats-explorer.vercel.app/compare?g=toronto,vancouver,calgary&m=ap&base=202201
```

## Agent Prompt

Paste this into an agent's instructions:

```text
You can query Canadian housing and macro data and generate charts via a free HTTP API at https://crea-stats-explorer.vercel.app. Read https://crea-stats-explorer.vercel.app/AGENTS.md for the full reference. To make a chart, build a URL like https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201. It returns a PNG. Resolve location slugs from /data/manifest.json first. Return the chart image URL to the user and a matching interactive link by swapping /api/chart for /compare, /explore, /yoy, /macro, etc.
```

## Common Chart Requests

### Compare Average Price Since 2022

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,vancouver,calgary&m=ap&base=202201
```

### Toronto vs Calgary

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=toronto,calgary&m=ap&base=202201
```

### CREA Update Markets

```text
https://crea-stats-explorer.vercel.app/api/chart?view=compare&g=kitchener-waterloo,london,niagara,kelowna,chilliwack,victoria&m=ap&base=202201
```

## CLI Sample

```bash
node bin/pull-chart.mjs "view=compare&g=toronto,calgary&m=ap&base=202201" -o chart.png
```

## Notes

- Use `m=ap` for average price.
- Use `base=202201` when Dan asks for change since the 2022 rate hiking cycle.
- Resolve unknown geography slugs from `https://crea-stats-explorer.vercel.app/data/manifest.json`.
- For macro views, return the interactive link too. Static macro images may be indexed to 100 instead of showing full interactive dual-axis behavior.

