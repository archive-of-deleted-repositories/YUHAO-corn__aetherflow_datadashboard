# AetherFlow 数据看板

这是AetherFlow项目的数据分析看板，用于监控用户行为和业务指标，以及管理用户反馈。

## 功能特点

- **数据概览**: 实时监控关键业务指标
- **功能分析**: 跟踪各功能模块的使用情况
- **留存分析**: 查看用户留存率指标
- **反馈管理**: 收集和管理用户反馈

## 技术栈

- Next.js
- Tailwind CSS
- Next Auth (Google OAuth)
- Firebase Admin SDK
- Chart.js

## 开发指南

### 环境变量设置

在项目根目录创建`.env.local`文件并添加以下环境变量:

```
# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Firebase Admin
FIREBASE_PROJECT_ID=aetherflow-b6459
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_CLIENT_EMAIL=your-client-email

# 管理员邮箱白名单（逗号分隔）
ADMIN_EMAILS=admin1@example.com,admin2@example.com
```

### 启动开发服务器

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 部署到Vercel

1. 在Vercel上创建新项目
2. 链接GitHub仓库
3. 配置环境变量
4. 部署

## 目录结构

```
aetherflow_datadashboard/
├── components/        # 通用UI组件
├── lib/               # 工具库和配置
├── pages/             # 页面和API路由
│   ├── api/           # API路由
│   ├── auth/          # 认证相关页面
│   └── dashboard/     # 看板页面
├── public/            # 静态资源
└── styles/            # 样式文件
```

## 开发计划

- [x] 基础架构搭建
- [ ] 数据聚合API
- [ ] 用户概览看板
- [ ] 功能分析看板
- [ ] 留存率看板
- [ ] 反馈管理 