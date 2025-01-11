import withBundleAnalyzer from "@next/bundle-analyzer";

const config = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
    domains: ["img.clerk.com"],
  },
  reactStrictMode: false,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(config);
