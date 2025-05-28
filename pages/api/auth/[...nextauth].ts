import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // 显示在登录表单上的名称
      name: 'Admin账号',
      // 凭据配置
      credentials: {
        username: { label: "用户名", type: "text" },
        password: { label: "密码", type: "password" }
      },
      async authorize(credentials) {
        // 从环境变量获取管理员账号和密码
        const validUsername = process.env.ADMIN_USERNAME;
        const validPassword = process.env.ADMIN_PASSWORD;
        
        // 验证提供的凭据
        if (credentials?.username === validUsername && 
            credentials?.password === validPassword) {
          // 登录成功，返回用户对象
          return {
            id: '1',
            name: '管理员',
            email: 'admin@aetherflow.app',
            isAdmin: true
          }
        }
        
        // 登录失败
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30天
  },
  callbacks: {
    // 在JWT回调中添加管理员信息
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    // 在Session回调中将JWT信息传递给客户端
    async session({ session, token }) {
      if (session.user) {
        // 添加管理员标识
        session.user.isAdmin = !!token.isAdmin;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions); 