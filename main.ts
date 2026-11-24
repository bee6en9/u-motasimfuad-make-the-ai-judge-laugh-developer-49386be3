// Entry for "Make the AI Judge Laugh: Developer Excuses"
// (u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3).
//
// Deterministic: every run writes the exact same single line to
// /output/entry.txt. No randomness, no network, no external input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I deployed on Friday at 4:59 PM because the code looked lonely and I wanted it to have company over the weekend.";

// Self-check against the competition gate: 1-200 characters, not
// whitespace only. The line is fixed, so this always passes; it is
// here to fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} violates the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
