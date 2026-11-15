import type { NextConfig } from "next";

const ghPagesRepo = "manual-gp-unimontes";
const basePath = process.env.GITHUB_PAGES === "true" ? `/${ghPagesRepo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;