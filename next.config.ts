import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Imágenes de posts del blog, servidas por bckbs (Spatie Media Library
    // sobre el disco "public" -> APP_URL/storage/...).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testapp.bestronger.es",
        pathname: "/storage/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
