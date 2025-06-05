import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.odsrdecka.cz",
      },
    ],
  }
};

export default nextConfig;
