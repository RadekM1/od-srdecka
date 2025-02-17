import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.odsrdecka.cz",
      },
    ],
  }
};

export default nextConfig;
