# 仓库配置指南

## 项目简介

这是一个使用 Astro 框架和 Breeze 主题的静态网站项目，用于部署到 GitHub Pages。

## 配置步骤

### 1. 安装 Git

请参考 `install-git-guide.md` 文件中的详细步骤安装 Git。

### 2. 配置 Git 基本信息

```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱@example.com"
```

### 3. 初始化 Git 仓库

```bash
cd d:\web\astro-theme-breeze-main
git init
git remote add origin git@github.com:qiao411/qiao411.github.io.git
```

### 4. 安装项目依赖

```bash
npm install
```

### 5. 构建项目

```bash
npm run build
```

### 6. 推送到远程仓库

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 7. 配置 GitHub Pages

1. 登录 GitHub，进入 `qiao411/qiao411.github.io` 仓库
2. 点击 "Settings" → "Pages"
3. 在 "Build and deployment" 部分，选择 "Source" 为 "Deploy from a branch"
4. 选择 "Branch" 为 "main"，"Folder" 为 "/ (root)"
5. 点击 "Save"
6. 等待 GitHub Pages 部署完成

## 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建项目
- `npm run preview` - 预览构建结果

## 项目结构

- `src/` - 源代码目录
- `public/` - 静态资源目录
- `dist/` - 构建输出目录
- `astro.config.mjs` - Astro 配置文件
- `package.json` - 项目依赖配置

## 注意事项

- 确保你的 GitHub 仓库已经创建
- 确保你有足够的权限推送到远程仓库
- 如果你使用 SSH 方式连接 GitHub，需要设置 SSH 密钥
- 如果你使用 HTTPS 方式，需要输入 GitHub 用户名和密码
- 构建成功后，生成的静态文件会在 `dist` 目录中

## 部署后访问

部署完成后，你可以访问 `https://qiao411.github.io` 查看你的网站。