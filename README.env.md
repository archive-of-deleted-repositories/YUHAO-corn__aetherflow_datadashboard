# 环境变量设置指南

请在项目根目录创建一个名为`.env.local`的文件，并填入以下内容：

```
# Next Auth
NEXTAUTH_URL=http://localhost:3000
# 运行以下命令生成一个安全的随机密钥: 
# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
NEXTAUTH_SECRET=your_generated_secret_key

# 管理员账号信息
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password

# Firebase Firestore (只需要项目ID)
FIREBASE_PROJECT_ID=aetherflow-b6459
```

## 详细说明

### Next Auth 配置
- `NEXTAUTH_URL`: 在开发环境中设为`http://localhost:3000`，在生产环境中设为您的域名
- `NEXTAUTH_SECRET`: 用于加密会话令牌的密钥，应当是一个长的随机字符串

### 管理员账号配置
- `ADMIN_USERNAME`: 管理员登录用户名，建议使用复杂且不易猜测的值
- `ADMIN_PASSWORD`: 管理员登录密码，建议使用强密码（包含大小写字母、数字和特殊字符）

### Firebase配置
- `FIREBASE_PROJECT_ID`: Firestore项目ID (aetherflow-b6459)

## 生成安全密钥

为了生成一个安全的随机密钥作为NEXTAUTH_SECRET，可以运行以下命令：

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

复制输出的随机字符串并粘贴到`.env.local`文件的`NEXTAUTH_SECRET`值中。

## 开发环境启动

配置完环境变量后，运行以下命令启动开发服务器：

```bash
npm run dev
```

服务器将在 http://localhost:3000 启动。 