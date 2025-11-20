import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main-page",
        permanent: false,
      },
    ];
  },s
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aaocdgpbwfsanpmortlk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
