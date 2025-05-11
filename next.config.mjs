/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    output: "export",
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    images:{
        domains:['img.freepik.com']
    },
    distDir: "build"
};

export default nextConfig;
