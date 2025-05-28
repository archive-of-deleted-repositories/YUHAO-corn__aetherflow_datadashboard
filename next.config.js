/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // 允许Google头像图片
  },
  // 添加国际化支持，默认语言为中文
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  },
  // 环境变量
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}

module.exports = nextConfig 