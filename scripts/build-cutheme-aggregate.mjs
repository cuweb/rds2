import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const cuthemeDir = resolve(root, 'dist/cutheme');

const files = ['tokens', 'base-styles', 'layout', 'typography'];

const aggregate = files
  .map(name => readFileSync(resolve(cuthemeDir, `${name}.css`), 'utf-8').trimEnd())
  .join('\n\n');

writeFileSync(resolve(cuthemeDir, 'cutheme.css'), aggregate + '\n');
writeFileSync(resolve(cuthemeDir, 'cutheme.scss'), aggregate + '\n');
console.log('  ✓ dist/cutheme/cutheme.{css,scss}');
