/**
 * entry.png presents THE DAY, ALL OF IT as a single cream-paper broadsheet.
 * It is the one-page edition for Thursday 19 November 2026.
 * The page treats the day's world news as one connected, readable record.
 * Its masthead establishes the edition name and fixes the date in view.
 * A compact stat band turns the day's defining numbers into a quick scan.
 * The band gives the page an immediate sense of scale before the stories.
 * Forty numbered stories fill the sheet, from major leads to short briefs.
 * The story mix keeps global headlines and regional developments together.
 * A region tally makes the geographic balance visible at a glance.
 * Repeated region markers help readers follow that balance through the page.
 * The cream ground gives the image the feel of a printed daily edition.
 * The layout is dense enough to feel comprehensive without losing hierarchy.
 * A date-check footer confirms which items belong to Thursday's news cycle.
 * It also distinguishes those events from material carried over from Wednesday.
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
