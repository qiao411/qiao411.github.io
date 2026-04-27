# Git 环境变量修复指南

## 问题分析

系统环境变量中存在 Git 路径 `C:\Program Files\Git\cmd`，但实际文件不存在。这可能是因为：

1. Git 曾经安装过，但后来被卸载了
2. Git 安装路径发生了变化
3. 环境变量没有更新

## 解决方案

### 步骤 1: 重新安装 Git

1. 访问 Git 官方网站：
2. 
3. 点击 "Windows" 下载按钮
4. 下载完成后，运行安装程序
5. 按照安装向导的提示，点击 "Next" 直到完成
6. 在安装选项中，确保勾选 "Git Bash Here" 和 "Git GUI Here"
7. 在 "Adjusting your PATH environment" 步骤中，选择 "Git from the command line and also from 3rd-party software"
8. 完成安装后，重启电脑以确保环境变量生效

### 步骤 2: 验证 Git 安装

1. 打开命令提示符（CMD）或 Git Bash
2. 运行以下命令：
   ```bash
   git --version
   ```
3. 如果显示 Git 版本信息，说明安装成功

### 步骤 3: 配置 Git 基本信息

1. 打开命令提示符或 Git Bash
2. 运行以下命令设置用户名（替换为你的 GitHub 用户名）：
   ```bash
   git config --global user.name "你的用户名"
   ```
3. 运行以下命令设置邮箱（替换为你的 GitHub 邮箱）：
   ```bash
   git config --global user.email "你的邮箱@example.com"
   ```

### 步骤 4: 配置仓库

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

### 步骤 5: 安装项目依赖

1. 确保你已经安装了 Node.js（推荐版本 18+）
2. 运行安装命令：
   ```bash
   npm install
   ```

### 步骤 6: 构建项目

1. 运行构建命令：
   ```bash
   npm run build
   ```

### 步骤 7: 推送到远程仓库

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

## 手动配置环境变量（如果需要）

如果安装后 Git 仍然无法使用，你可以手动配置环境变量：

1. 右键点击 "此电脑" → "属性" → "高级系统设置" → "环境变量"
2. 在 "系统变量" 中找到 "Path"，点击 "编辑"
3. 点击 "新建"，添加 Git 的安装路径，通常是 `C:\Program Files\Git\cmd`
4. 点击 "确定" 保存更改
5. 重启电脑以确保环境变量生效

## 注意事项

- 确保以管理员身份运行安装程序
- 安装完成后一定要重启电脑
- 如果使用 SSH 方式连接 GitHub，需要设置 SSH 密钥
- 确保你的 GitHub 仓库已经创建

## 验证方法

1. 打开命令提示符或 Git Bash
2. 运行以下命令：
   ```bash
   git --version
   which git
   ```
3. 如果显示 Git 版本信息和安装路径，说明配置成功
