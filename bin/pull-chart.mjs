#!/usr/bin/env node

import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const API_BASE = "https://crea-stats-explorer.vercel.app/api/chart";

function usage() {
  console.error('Usage: node bin/pull-chart.mjs "view=compare&g=toronto,calgary&m=ap&base=202201" -o chart.png');
  process.exit(1);
}

const [query, flag, output] = process.argv.slice(2);

if (!query || flag !== "-o" || !output) {
  usage();
}

const url = `${API_BASE}?${query.replace(/^\?/, "")}`;
const response = await fetch(url);

if (!response.ok || !response.body) {
  throw new Error(`Chart request failed: ${response.status} ${response.statusText}`);
}

await pipeline(response.body, createWriteStream(output));
console.log(`Saved ${output}`);
console.log(url);

