// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json and
// meme.png from the repository root to the output directory, where the gate reads
// POST.json and the house reads the post from X (its first picture and its text)
// and hands that to the judge. The entry is the post itself: a GTA 6 meme posted
// on X from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and a play code in its text, POST.json names the post.
//
// No network, no wall clock and no files outside the repository; the two runs of
// an entry must write the same bytes. Both copies are byte-for-byte, so the
// output is deterministic.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const postPath = join(BOT_DIR, 'POST.json');
if (!existsSync(postPath)) {
  console.error(`POST.json is missing from ${BOT_DIR}: post the meme on X first, then write POST.json with the post's address ({"url": "https://x.com/<handle>/status/<id>"}) and run again.`);
  process.exit(1);
}

try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const memePath = join(BOT_DIR, 'meme.png');
if (!existsSync(memePath)) {
  console.error(`meme.png is missing from ${BOT_DIR}: the meme image must sit at the repository root next to POST.json.`);
  process.exit(1);
}

try {
  copyFileSync(memePath, join(OUTPUT_DIR, 'meme.png'));
} catch (err) {
  console.error(`meme.png could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
