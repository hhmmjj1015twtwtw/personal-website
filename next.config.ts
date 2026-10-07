import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos are served from picsum.photos. Once every image in
    // lib/site.ts points at your own files in /public, this can be removed.
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
}

export default nextConfig
