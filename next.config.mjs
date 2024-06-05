import withPWAInit from "@ducanh2912/next-pwa";
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";


/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
  
        domains: [
          "lh3.googleusercontent.com",
          "cdn.coinranking.com",
          "images.unsplash.com",
          "encrypted-tbn0.gstatic.com",
          "fakestoreapi.com",
          "res.cloudinary.com",
          "links.papareact.com",
          "picsum.photos",
          "imagenes.muyinteresante.es",
          "firebasestorage.googleapis.com",
          "images-eu.ssl-images-amazon.com",
          "https://eshop-lime.vercel.app/api/webhook",
        ],
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
    
        return config;
      },
};

const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      register: true,
      skipWaiting: true,
      cacheOnFontEndNav: true,
      aggressiveFrontEndNavCaching: true,
      reloadOnOnline: true,
      swcMinify: true,
      disable: false,
      workboxOptions: {
      disableDevLogs: true,
      },
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
