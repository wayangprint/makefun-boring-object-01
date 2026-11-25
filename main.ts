// make.fun entry: "The Most Boring Object, Reviewed in One Line"
// Writes one funny, true one-line review to <output>/entry.txt.
// Node 22, standard library only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review: a single line, 142 characters, about a doorstop —
// the dullest object in the room, and the joke is its own dullness.
const oneLineReview =
  "The doorstop spends its whole life being kicked aside by the very door it holds open, and has never once complained \u2014 mostly because it can't.";

// Emit the review as entry.txt inside the output directory.
function emitReview(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, so the file is exactly the line.
  writeFileSync(join(outDir, "entry.txt"), oneLineReview, "utf8");
}

emitReview();
