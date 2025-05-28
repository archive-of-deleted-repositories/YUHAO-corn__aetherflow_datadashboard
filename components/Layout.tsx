import React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = '数据看板' }: LayoutProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  // 如果未登录并且不在登录页面，重定向到登录页
  React.useEffect(() => {
    if (!session && !router.pathname.startsWith('/auth')) {
      router.push('/auth/signin');
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>{`AetherFlow ${title}`}</title>
        <meta name="description" content="AetherFlow数据分析与管理系统" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 不在登录页面时显示导航和侧边栏 */}
      {!router.pathname.startsWith('/auth') ? (
        <div className="min-h-screen flex flex-col">
          {/* 顶部导航栏 */}
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary-700">AetherFlow 管理系统</span>
              </div>
              {session?.user && (
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-700">
                    {session.user.name || session.user.email}
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    退出登录
                  </button>
                </div>
              )}
            </div>
          </header>

          <div className="flex flex-1">
            {/* 侧边栏导航 */}
            <aside className="w-64 bg-gray-100 border-r">
              <nav className="p-4 space-y-1">
                <Link href="/dashboard" passHref>
                  <span className={`block p-2 rounded ${
                    router.pathname === '/dashboard' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-200'
                  } cursor-pointer`}>
                    概览
                  </span>
                </Link>
                <Link href="/dashboard/features" passHref>
                  <span className={`block p-2 rounded ${
                    router.pathname === '/dashboard/features' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-200'
                  } cursor-pointer`}>
                    功能使用分析
                  </span>
                </Link>
                <Link href="/dashboard/retention" passHref>
                  <span className={`block p-2 rounded ${
                    router.pathname === '/dashboard/retention' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-200'
                  } cursor-pointer`}>
                    留存率分析
                  </span>
                </Link>
                <Link href="/dashboard/feedback" passHref>
                  <span className={`block p-2 rounded ${
                    router.pathname === '/dashboard/feedback' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-200'
                  } cursor-pointer`}>
                    用户反馈
                  </span>
                </Link>
              </nav>
            </aside>

            {/* 主内容区 */}
            <main className="flex-1 p-6 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      ) : (
        // 登录页面只显示内容
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      )}
    </>
  );
};

export default Layout; 