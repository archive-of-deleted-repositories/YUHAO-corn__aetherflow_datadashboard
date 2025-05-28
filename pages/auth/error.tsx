import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';

const AuthError = () => {
  const router = useRouter();
  const { error } = router.query;
  
  // 根据错误类型显示不同的错误信息
  const getErrorMessage = () => {
    switch (error) {
      case 'AccessDenied':
        return '您没有访问权限。请联系系统管理员获取授权。';
      case 'Configuration':
        return '认证系统配置错误。请联系技术支持。';
      case 'Verification':
        return '验证链接已过期或已失效。请重新登录。';
      case 'OAuthSignin':
      case 'OAuthCallback':
      case 'OAuthCreateAccount':
      case 'OAuthAccountNotLinked':
        return 'Google登录过程中出现问题。请稍后再试。';
      default:
        return '登录过程中发生错误。请稍后再试。';
    }
  };

  return (
    <Layout title="登录错误">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="card text-center">
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">登录失败</h1>
            <p className="text-gray-600 mb-6">{getErrorMessage()}</p>
            <div className="flex flex-col space-y-3">
              <Link href="/auth/signin" passHref>
                <button className="btn btn-primary">
                  返回登录页
                </button>
              </Link>
              <Link href="https://aetherflow-app.com" passHref>
                <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  返回AetherFlow主站
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthError; 