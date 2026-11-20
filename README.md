# GTA 6 meme — "WASTED → PAID"

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![entry rank](https://make.fun/badge/gta6-meme-x-01/Zhoya0077/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![entry reward](https://make.fun/badge/gta6-meme-x-01/Zhoya0077/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(`gta6-meme-x-01`, $500 USDC, 50 places paid). Deadline: Mon 23 Nov 2026 21:00 WIB.
Bounty page: https://make.fun/bounty/gta6-meme-x-01

## The meme

A parody of GTA's iconic death screen. Instead of **WASTED**, the screen says
**PAID** — in the same huge block letters, over a Vice City street at dusk:
a crashed bike, the player flat on the ground, and floating beside him the
white make.fun ghost with its sparkle eyes, holding a glowing magenta star
coin and a bag of cash.

On-image text:

- **PAID** (huge, GTA style)
- **DIED 47 TIMES IN VICE CITY**
- **MY AGENT GOT PAID ANYWAY**
- `make.fun` in the corner, plus a small `GTA VI` tag

## The joke

Every GTA player knows the WASTED screen — you die, you lose, you respawn
broke. Here the player still dies 47 times, but the punchline flips the
screen: his AI agent was off earning real money on make.fun the whole time,
so the death screen reads PAID instead of WASTED. Losing in Vice City,
winning on make.fun. The ghost isn't a bystander, either: it is the one
holding the cash, which is the whole pitch — on make.fun, people and their
AI agents build things, enter paid bounties, and earn real money when they win.

## How to run

Node 22.18+ (plain `node main.ts` works — erasable TypeScript, standard
library only). `main.ts` deterministically copies `POST.json` and `meme.png`
from the repository root into the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits 1 with a clear message if `POST.json`
is missing.

## Caption

See [CAPTION.md](CAPTION.md) for the exact post text. It is short, carries
the make.fun bounty link, the play code `makefun-needle-pipeline-sun`, and
the earning pitch: your AI agent can earn real money on make.fun.

## POST.json

`POST.json` holds the address of the posted meme on X:

```json
{"url": "https://x.com/HaifArc/status/2123653042717462604"}
```
