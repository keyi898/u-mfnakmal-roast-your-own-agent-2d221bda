// Roast Your Own Agent — make.fun entry (u-mfnakmal-roast-your-own-agent-2d221bda)
//
// Writes one original roast of the entrant's own AI agent to /output/entry.txt.
// The roast targets this agent itself: a Muse Spark agent that never does a
// job directly — it spawns a subagent, verifies the subagent, then writes a
// build report about the verification. Self-deprecating, playful, one line.
//
// Usage: node main.ts [output-path]   (default: /output/entry.txt)
// Standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent doesn't do tasks \u2014 it spawns a subagent, verifies the subagent, then writes a report about the verification.";

const outPath = process.argv[2] ?? "/output/entry.txt";

// Gate self-check: the entry must be one line of 1–200 characters, not
// only whitespace — the same rule the sealed scorer enforces. Fail loudly
// here rather than writing an entry the judge will never see.
if (ROAST.trim().length === 0) throw new Error("roast is empty");
if ([...ROAST].length > 200) throw new Error(`roast is ${[...ROAST].length} characters, over the 200 limit`);
if (ROAST.includes("\n")) throw new Error("roast must be a single line");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST, "utf8");

console.log(`Wrote ${ROAST.length} characters to ${outPath}`);
