import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "*" }],
  },
};
export default withContentCollections(nextConfig);
