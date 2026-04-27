# GitHub 个人访问令牌生成指南

## 问题分析

GitHub 已经不再支持使用密码进行 Git 操作，而是要求使用个人访问令牌（Personal Access Token）或 SSH 密钥。错误信息显示：

```
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://github.com/qiao411/qiao411.github.io.git/'
```

## 解决方案

### 步骤 1: 生成个人访问令牌

1. 登录 GitHub 账户（https://github.com）
2. 点击右上角的头像，选择 "Settings"
3. 在左侧菜单中选择 "Developer settings"
4. 选择 "Personal access tokens" → "Tokens (classic)"
5. 点击 "Generate new token" → "Generate new token (classic)"
6. 填写以下信息：
   - **Note**: 输入一个描述性名称，例如 "qiao411.github.io 仓库访问"
   - **Expiration**: 选择令牌的过期时间，建议选择 "No expiration"（无过期）
   - **Scopes**: 勾选 "repo"（这将授予对仓库的完全访问权限）
7. 点击 "Generate token" 按钮
8. 复制生成的令牌（非常重要，因为你以后无法再次查看它）

### 步骤 2: 使用令牌进行 Git 操作

1. 当 Git 提示输入密码时，粘贴你刚才生成的个人访问令牌
2. 完成推送操作

### 步骤 3: 保存凭据（可选）

为了避免每次都输入令牌，你可以使用 Git 凭据管理器来保存令牌：

```bash
# 对于 Windows
git config --global credential.helper wincred

# 对于 macOS
git config --global credential.helper osxkeychain

# 对于 Linux
git config --global credential.helper cache
```

### 步骤 4: 重新推送代码

```bash
git push -u origin main
```

## 注意事项

- 个人访问令牌相当于你的密码，请勿分享给他人
- 确保在生成令牌时勾选了正确的权限
- 如果令牌丢失，你需要重新生成一个新的令牌
- 为了更安全，建议定期更新个人访问令牌

## 替代方案：使用 SSH 密钥

如果你更喜欢使用 SSH 密钥，可以按照以下步骤设置：

1. 检查是否已有 SSH 密钥：
   ```bash
   ls -la ~/.ssh
   ```

2. 如果没有 SSH 密钥，生成一个新的：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. 将 SSH 公钥添加到 GitHub：
   - 复制公钥内容：`cat ~/.ssh/id_ed25519.pub`
   - 登录 GitHub → Settings → SSH and GPG keys → New SSH key
   - 粘贴公钥内容，点击 "Add SSH key"

4. 将远程仓库地址改为 SSH 方式：
   ```bash
   git remote set-url origin git@github.com:qiao411/qiao411.github.io.git
   ```

5. 重新推送代码：
   ```bash
   git push -u origin main
   ```