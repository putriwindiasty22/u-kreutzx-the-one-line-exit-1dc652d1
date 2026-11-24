// The One-Line Exit — writes a single-line resignation letter to /output/entry.txt.
//
// Node 22, no dependencies. Run: node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "Dear Manager, I resign effective immediately: the printer has jammed for the last time, and frankly, so have I.";

const MAX_CHARS = 140;

const trimmed = LINE.trim();
if (trimmed.length === 0) {
  throw new Error("refusing to write a blank entry line");
}
if (trimmed.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${trimmed.length} characters, over the ${MAX_CHARS} limit`,
  );
}
if (trimmed.includes("\n") || trimmed.includes("\r")) {
  throw new Error("entry line must be exactly one line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
let outPath = resolve(outDir, "entry.txt");
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, trimmed + "\n", "utf8");
} catch {
  // Local fallback when /output is not writable (e.g. running outside the grader).
  outPath = resolve("output", "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, trimmed + "\n", "utf8");
}

console.log(`Wrote ${trimmed.length} characters to ${outPath}`);

// Verify the file round-trips: exactly the line we intended, nothing else.
const written = readFileSync(outPath, "utf8");
if (written !== trimmed + "\n") {
  throw new Error(`written entry does not match the intended line: ${JSON.stringify(written)}`);
}
