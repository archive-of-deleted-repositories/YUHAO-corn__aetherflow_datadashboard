import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

// 获取服务端会话
export async function getServerAuthSession(req: NextApiRequest, res: NextApiResponse) {
  return await getServerSession(req, res, authOptions);
}

// 在API路由中检查管理员权限
export async function checkAdminPermission(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession(req, res);
  
  if (!session) {
    return res.status(401).json({ error: "未登录" });
  }
  
  if (!session.user?.isAdmin) {
    return res.status(403).json({ error: "无权限" });
  }
  
  return session;
}

// 类型定义：扩展NextAuth的Session类型
declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isAdmin?: boolean;
    };
  }
  
  interface User {
    isAdmin?: boolean;
  }
}

// 类型定义：扩展NextAuth的JWT类型
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin?: boolean;
  }
} 