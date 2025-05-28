import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// 中间件处理函数
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 不需要认证的路径列表
  const publicPaths = [
    '/auth/signin',
    '/auth/error',
    '/auth/unauthorized',
    '/api/auth'
  ];
  
  // 如果是公开路径，直接允许访问
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // 获取用户令牌
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // 用户未登录，重定向到登录页面
  if (!token) {
    const url = new URL('/auth/signin', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }
  
  // 用户已认证，允许访问
  return NextResponse.next();
}

// 配置中间件匹配的路径
export const config = {
  matcher: [
    /*
     * 匹配所有需要认证的路径:
     * - 所有的/dashboard路径
     * - 所有的/api路径，但不包括/api/auth
     */
    '/dashboard/:path*',
    '/api/:path*',
  ],
}; 