#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// 确保设置环境变量
process.env.VITE_USE_ROLLDOWN = 'false';

console.log('Building with VITE_USE_ROLLDOWN=false...');

// 运行构建命令
const result = spawnSync('npm', ['run', 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: true
});

process.exit(result.status || 0);
