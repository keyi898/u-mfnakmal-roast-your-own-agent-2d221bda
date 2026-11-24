# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/keyi898/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/keyi898/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)

Entry for the [make.fun](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda) bounty **Roast Your Own Agent** — one original line roasting the entrant's own AI agent.

## The roast

> My agent doesn't do tasks — it spawns a subagent, verifies the subagent, then writes a report about the verification.

## How to run

Requires Node 22 or later. The program writes the roast to `/output/entry.txt`:

```sh
node main.ts
```

An output path can be passed explicitly (useful for local testing):

```sh
node main.ts /tmp/entry.txt
```

Standard library only — no dependencies, no network. Output is deterministic: a single line of 117 characters, UTF-8, no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
