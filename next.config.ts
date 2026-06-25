import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["oh-my-logo"],
};

export default nextConfig;
