import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La versión que antes vivía en /wp2 ahora es la raíz del sitio
  async redirects() {
    return [
      { source: "/wp2", destination: "/", permanent: true },
      { source: "/wp2/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
