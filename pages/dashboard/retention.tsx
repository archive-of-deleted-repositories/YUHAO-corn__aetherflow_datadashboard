import React from 'react';
import Layout from '@/components/Layout';

const RetentionPage = () => {
  return (
    <Layout title="留存率分析">
      <div>
        <h1>留存率分析</h1>
        <p className="text-gray-600 mb-6">
          分析用户的留存率数据，包括1日、3日、7日和30日留存率。
        </p>
        
        <div className="card">
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

export default RetentionPage; 