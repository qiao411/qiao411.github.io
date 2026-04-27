# Git 安装指南

## 步骤 1: 下载 Git

1. 访问 Git 官方网站：https://git-scm.com/downloads
2. 点击 "Windows" 下载按钮
3. 下载完成后，运行安装程序

## 步骤 2: 安装 Git

1. 双击下载的安装文件，开始安装
2. 按照安装向导的提示，点击 "Next" 直到完成
3. 在安装选项中，确保勾选 "Git Bash Here" 和 "Git GUI Here"
4. 完成安装后，重启电脑以确保环境变量生效

## 步骤 3: 验证 Git 安装

1. 打开命令提示符（CMD）或 Git Bash
2. 运行以下命令：
   ```bash
   git --version
   ```
3. 如果显示 Git 版本信息，说明安装成功

## 步骤 4: 配置 Git 基本信息

1. 打开命令提示符或 Git Bash
2. 运行以下命令设置用户名（替换为你的 GitHub 用户名）：
   ```bash
   git config --global user.name "你的用户名"
   ```
3. 运行以下命令设置邮箱（替换为你的 GitHub 邮箱）：
   ```bash
   git config --global user.email "你的邮箱@example.com"
   ```

## 步骤 5: 配置仓库

1. 打开命令提示符或 Git Bash，进入项目目录：
   ```bash
   cd d:\web\astro-theme-breeze-main
   ```
2. 初始化 Git 仓库（如果尚未初始化）：
   ```bash
   git init
   ```
3. 添加远程仓库地址：
   ```bash
   git remote add origin git@github.com:qiao411/qiao411.github.io.git
   ```
4. 检查远程仓库配置：
   ```bash
   git remote -v
   ```

## 步骤 6: 安装项目依赖

1. 确保你已经安装了 Node.js（推荐版本 18+）
2. 打开命令提示符或 Git Bash，进入项目目录：
   ```bash
   cd d:\web\astro-theme-breeze-main
   ```
3. 安装依赖：
   ```bash
   npm install
   ```

## 步骤 7: 构建项目

1. 运行构建命令：
   ```bash
   npm run build
   ```
2. 构建成功后，生成的静态文件会在 `dist` 目录中

## 步骤 8: 推送到远程仓库

1. 添加所有文件到暂存区：
   ```bash
   git add .
   ```
2. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```
3. 推送到远程仓库：
   ```bash
   git push -u origin main
   ```

## 步骤 9: 配置 GitHub Pages

1. 登录 GitHub，进入 `qiao411/qiao411.github.io` 仓库
2. 点击 "Settings" → "Pages"
3. 在 "Build and deployment" 部分，选择 "Source" 为 "Deploy from a branch"
4. 选择 "Branch" 为 "main"，"Folder" 为 "/ (root)"
5. 点击 "Save"
6. 等待 GitHub Pages 部署完成，通常需要几分钟

## 注意事项

- 如果你使用 SSH 方式连接 GitHub，需要设置 SSH 密钥
- 如果你使用 HTTPS 方式，需要输入 GitHub 用户名和密码
- 确保你的 GitHub 仓库已经创建
- 确保你的项目构建成功，没有错误

## 后续步骤

安装并配置完成后，你可以：
1. 使用 `npm run dev` 启动开发服务器，在本地预览网站
2. 每次修改代码后，运行 `npm run build` 重新构建
3. 使用 Git 进行版本控制和部署你的网站
4. 访问 `https://qiao411.github.io` 查看部署后的网站