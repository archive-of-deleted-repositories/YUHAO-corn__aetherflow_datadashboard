import React from 'react';
import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';
import { getFirebaseProjectInfo } from '@/lib/firebase-admin';

const Dashboard = () => {
  const { data: session } = useSession();
  const firebaseInfo = getFirebaseProjectInfo();
  
  return (
    <Layout title="概览">
      <div>
        <h1>欢迎使用 AetherFlow 数据看板</h1>
        <p className="text-gray-600 mb-6">
          这里展示了 AetherFlow 的关键指标和统计数据。
        </p>
        
        {/* 快速统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <h3 className="text-gray-500 text-sm font-medium mb-1">总用户数</h3>
            <div className="text-3xl font-bold">-</div>
            <div className="text-sm text-gray-500 mt-1">数据加载中...</div>
          </div>
          
          <div className="card">
            <h3 className="text-gray-500 text-sm font-medium mb-1">活跃用户 (本周)</h3>
            <div className="text-3xl font-bold">-</div>
            <div className="text-sm text-gray-500 mt-1">数据加载中...</div>
          </div>
          
          <div className="card">
            <h3 className="text-gray-500 text-sm font-medium mb-1">会员转化率</h3>
            <div className="text-3xl font-bold">-</div>
            <div className="text-sm text-gray-500 mt-1">数据加载中...</div>
          </div>
          
          <div className="card">
            <h3 className="text-gray-500 text-sm font-medium mb-1">平均留存率</h3>
            <div className="text-3xl font-bold">-</div>
            <div className="text-sm text-gray-500 mt-1">数据加载中...</div>
          </div>
        </div>
        
        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h2 className="text-lg font-medium mb-4">用户增长趋势</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">图表数据正在准备中...</p>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-lg font-medium mb-4">功能使用频率</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">图表数据正在准备中...</p>
            </div>
          </div>
        </div>
        
        {/* 状态信息 */}
        <div className="card">
          <h2 className="text-lg font-medium mb-4">系统状态</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">系统版本</span>
              <span className="font-medium">v1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Firebase项目</span>
              <span className="font-medium">{firebaseInfo.projectId} ({firebaseInfo.environment})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">登录身份</span>
              <span className="font-medium">{session?.user?.name || '管理员'}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 