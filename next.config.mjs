/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
    domains: ["img.clerk.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;
