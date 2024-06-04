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

export default nextConfig;
