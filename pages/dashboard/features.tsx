import React from 'react';
import Layout from '@/components/Layout';

const FeaturesPage = () => {
  return (
    <Layout title="功能使用分析">
      <div>
        <h1>功能使用分析</h1>
        <p className="text-gray-600 mb-6">
          分析AetherFlow各功能的使用频率、趋势和用户行为模式。
        </p>
        
        <div className="card">
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-600">功能正在开发中</h2>
            <p className="text-gray-500 mt-2">此功能将在后续版本中推出，敬请期待。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage; 