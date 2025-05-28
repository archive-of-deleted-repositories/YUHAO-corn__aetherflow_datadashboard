import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Layout from '@/components/Layout';

const Unauthorized = () => {
  return (
    <Layout title="无权限">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">访问受限</h1>
            <p className="text-gray-600 mb-6">
              您没有访问管理系统的权限。请联系系统管理员申请权限。
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                className="btn btn-primary"
              >
                使用其他账号登录
              </button>
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

export default Unauthorized; 