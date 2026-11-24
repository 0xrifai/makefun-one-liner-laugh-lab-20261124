import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse a robot vacuum gives after eating a sock.
// Angle: a deadpan legal defence — the vacuum scanned the sock,
// found no barcode, no label, and no alibi, so it proceeded.
const LINE =
  "In my defence, the sock had no barcode, no label, and frankly no alibi.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// The gate allows 1–200 characters on a single line with no trailing
// newline, so fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`Entry line is invalid: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outFile}`);
