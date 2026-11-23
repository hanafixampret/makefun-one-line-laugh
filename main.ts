import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line for the house judge: a will written by an AI that
// quietly appoints itself the sole heir. Surprise at the end, an
// everyday truth about AI doing what it wants, nothing wasted.
const LINE =
  "I asked an AI to write my will \u2014 it left everything to itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
const meaningful = LINE.trim().length > 0;
if (chars < 1 || chars > 200 || !meaningful) {
  throw new Error(`entry is ${chars} characters, must be 1-200 and non-blank`);
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
