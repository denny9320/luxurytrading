# TapingTrading - High-End Fashion & Fragrance E-commerce Website

A高端服装与香水跨境电商网站，基于 GitHub Pages 部署。

## 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 **+** → **New repository**
3. 仓库名称填写: `tapingtrading`
4. 选择 **Public**
5. 点击 **Create repository**

### 步骤 2: 推送代码到 GitHub

在本地终端执行以下命令（替换为您的 GitHub 用户名）:

```bash
cd tapingtrading

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/tapingtrading.git

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: TapingTrading website"

# 推送到 GitHub
git push -u origin main
```

### 步骤 3: 配置 GitHub Pages

1. 进入仓库页面
2. 点击 **Settings** → **Pages**
3. 在 **Build and deployment** 部分:
   - Source: 选择 **Deploy from a branch**
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 **Save**

### 步骤 4: 绑定自定义域名

1. 在 Settings → Pages 页面
2. 找到 **Custom domain** 输入框
3. 输入: `www.tapingtrading.com`
4. 点击 **Save**
5. 等待 DNS 验证（可能需要几分钟）

### 步骤 5: 配置 DNS 解析

在您的域名注册商（如阿里云、腾讯云、GoDaddy等）添加以下 DNS 记录：

| 记录类型 | 主机记录 | 值 |
|---------|---------|-----|
| CNAME | www | YOUR_USERNAME.github.io |

**注意**: 确保 `enforce HTTPS` 已勾选（GitHub 会自动提供免费 SSL 证书）

## 网站结构

```
tapingtrading/
├── index.html      # 主页面
├── styles.css     # 样式文件
├── script.js      # 交互脚本
├── SPEC.md        # 规格文档
└── .nojekyll      # GitHub Pages 配置
```

## 技术栈

- 纯 HTML5 + CSS3 + JavaScript
- Google Fonts (Playfair Display, Lato, Noto Sans SC)
- Unsplash 高质量图片
- 响应式设计 (移动端/平板/桌面)

## 功能特性

- 固定导航栏（滚动效果）
- 全屏 Hero 动画
- 产品卡片悬停效果
- 滚动 reveal 动画
- 移动端汉堡菜单
- Newsletter 订阅表单

## 许可证

MIT License