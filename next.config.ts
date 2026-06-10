import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URLs for the static review pages in /public — same files served
  // without the .html extension. The full /<name>.html path still works.
  async rewrites() {
    return [
      { source: "/palette-options", destination: "/palette-options.html" },
      { source: "/palette-preview", destination: "/palette-preview.html" },
      { source: "/brand-sheet", destination: "/brand-sheet.html" },
      { source: "/photo-direction", destination: "/photo-direction.html" },
    ];
  },
};

export default nextConfig;
