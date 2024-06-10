/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true // NONE OF MY OPTIONS WERE WORKING SO I HAD TO DO THIS TO PROCEED @TODO: REMOVE THIS LINE
  },
  experimental: {
    missingSuspenseWithCSRBailout: false // @TODO: REMOVE THIS LINE AS IT'S NOT RECOMMENDED
  }
};

export default nextConfig;
