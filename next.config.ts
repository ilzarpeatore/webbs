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
  // Sirve el contenido de /home en la raíz sin cambiar la URL del navegador
  // (a diferencia de un redirect, que sí la cambiaría a /home).
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/home",
      },
      // Sirve el HTML autocontenido del tracker de Mesociclo 1 en /m1-sep
      // sin exponer la extensión .html en la URL.
      {
        source: "/m1-sep",
        destination: "/m1-sep.html",
      },
      // Sirve el HTML autocontenido del tracker de Media Maratón en
      // /nerea-media-m1 sin exponer la extensión .html en la URL.
      {
        source: "/nerea-media-m1",
        destination: "/nerea-media-m1.html",
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/contact",
        destination: "/contacto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
