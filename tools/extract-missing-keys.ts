#!/usr/bin/env tsx
import fs from 'fs';
import path from 'path';

const root = path.resolve(__dirname, '..');
const enPath = path.join(root, 'dictionaries', 'en.json');
const elPath = path.join(root, 'dictionaries', 'el.json');
const outPath = path.join(root, 'tools', 'missing-for-el.json');

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function findMissing(en: any, el: any) {
  const missing: any = {};

  function recurse(eNode: any, lNode: any, outNode: any, keyPath: string[]) {
    if (typeof eNode === 'string') {
      if (lNode === undefined) {
        const key = keyPath.join('.');
        outNode[key] = eNode;
      }
      return;
    }

    if (Array.isArray(eNode)) {
      // For arrays, compare lengths; if missing entirely, copy
      if (!Array.isArray(lNode)) {
        const key = keyPath.join('.');
        outNode[key] = eNode;
        return;
      }
      // For arrays of primitives, check each index
      eNode.forEach((item: any, idx: number) => {
        recurse(item, (lNode && lNode[idx] !== undefined) ? lNode[idx] : undefined, outNode, [...keyPath, String(idx)]);
      });
      return;
    }

    // object
    Object.keys(eNode).forEach((k) => {
      recurse(eNode[k], lNode ? lNode[k] : undefined, outNode, [...keyPath, k]);
    });
  }

  recurse(en, el, missing, []);
  return missing;
}

function main() {
  if (!fs.existsSync(enPath)) {
    console.error('en.json not found:', enPath);
    process.exit(1);
  }
  if (!fs.existsSync(elPath)) {
    console.error('el.json not found:', elPath);
    process.exit(1);
  }

  const en = readJson(enPath);
  const el = readJson(elPath);

  const missing = findMissing(en, el);

  fs.writeFileSync(outPath, JSON.stringify(missing, null, 2), 'utf8');
  console.log('Wrote', outPath);
  const count = Object.keys(missing).length;
  console.log('Missing keys (approx):', count);
}

main();
