import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  
  useEffect(() => {
    if (status === 'loading') return; // 等待会话状态加载完成
    
    if (session) {
      // 已登录，重定向到dashboard
      router.push('/dashboard');
    } else {
      // 未登录，重定向到登录页
      router.push('/auth/signin');
    }
  }, [session, status, router]);
  
  // 加载状态显示
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-xl font-medium text-gray-700 mb-4">AetherFlow 管理系统</h2>
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-500">正在加载...</p>
      </div>
    </div>
  );
} 