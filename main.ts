/**
 * entry.png - one page of world news for Thursday 19 November 2026.
 *
 * The image is a cream newsprint broadsheet covering the entire planet's
 * day on a single sheet. At the top sits a masthead carrying the date on
 * a red tab. Directly beneath it, a day-in-numbers strip counts out the
 * headline figures: the ICJ's 9-6 genocide vote, Anthropic's $81bn IPO,
 * Kumamoto's M5.7 quake, and UK inflation holding at 3.6%.
 *
 * Three hero cards carry the day's heaviest stories - the Shenzhen
 * three-way summit, the ICJ's Myanmar ruling, and Anthropic's Nasdaq
 * debut. Below them, five secondary cards widen the picture and seven
 * tertiary cards fill out the long tail of the day. Twenty-four
 * region-tagged evening briefs run along the bottom, and a date-check
 * footer closes the page by separating true 19 November events from any
 * Wednesday carryover.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
