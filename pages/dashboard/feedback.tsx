import React from 'react';
import Layout from '@/components/Layout';

const FeedbackPage = () => {
  return (
    <Layout title="用户反馈">
      <div>
        <h1>用户反馈管理</h1>
        <p className="text-gray-600 mb-6">
          查看和管理用户提交的反馈意见和建议。
        </p>
        
        <div className="card">
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
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

export default FeedbackPage; 