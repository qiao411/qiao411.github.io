#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const viteChunkPath = join(__dirname, '..', 'node_modules', 'vite', 'dist', 'node', 'chunks', 'node.js');

if (existsSync(viteChunkPath)) {
  console.log('Patching Vite to disable rolldown...');
  let content = readFileSync(viteChunkPath, 'utf8');
  
  // 替换检查 VITE_USE_ROLLDOWN 的代码
  content = content.replace(/VITE_USE_ROLLDOWN\s*===\s*['"]true['"]/g, 'false');
  content = content.replace(/process\.env\.VITE_USE_ROLLDOWN/g, '"false"');
  
  writeFileSync(viteChunkPath, content, 'utf8');
  console.log('Vite patched successfully!');
} else {
  console.log('Vite chunk file not found, skipping patch');
}
