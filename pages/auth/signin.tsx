import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { signIn, getProviders } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

// 登录页面类型
type SignInProps = {
  providers: any;
};

const SignIn = ({ providers }: SignInProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { callbackUrl } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('请输入用户名和密码');
      return;
    }
    
    setLoading(true);
    setError('');
    
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
      callbackUrl: callbackUrl as string || '/dashboard'
    });
    
    setLoading(false);
    
    if (result?.error) {
      setError('用户名或密码错误');
    } else if (result?.url) {
      router.push(result.url);
    }
  };

  return (
    <Layout title="登录">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="card">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">AetherFlow 管理系统</h1>
              <p className="text-gray-600 mt-2">请登录以访问管理看板</p>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  用户名
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                  placeholder="输入管理员用户名"
                  disabled={loading}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  密码
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="输入管理员密码"
                  disabled={loading}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full btn btn-primary ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? '登录中...' : '登录'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>仅限管理员访问。如需权限，请联系系统管理员。</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn; 