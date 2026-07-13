/** @type {import('next').NextConfig} */

const repoName = "portfolio"

const nextConfig = {
    basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
    output: 'export',
    images: { unoptimized: true },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;