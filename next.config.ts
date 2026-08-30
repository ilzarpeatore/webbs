import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Build en modo standalone: genera .next/standalone con un server.js
  // autocontenido (solo las deps de producción necesarias), pensado para
  // correr dentro de un contenedor Docker sin `npm install` en runtime.
  output: "standalone",
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
