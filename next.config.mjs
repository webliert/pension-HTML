/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 静态导出，产物在 ./out
  trailingSlash: true,       // Gitee Pages 兼容
  images: { unoptimized: true },
  reactStrictMode: true,
}
export default nextConfig