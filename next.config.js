// module.exports = {
//   swcMinify: true,
//   webpack: (config, { dev, isServer }) => {
//     // Replace React with Preact only in client production build
//     if (!dev && !isServer) {
//       Object.assign(config.resolve.alias, {
//         react: 'preact/compat',
//         'react-dom/test-utils': 'preact/test-utils',
//         'react-dom': 'preact/compat',
//       });
//     }

//     return config;
//   },
// };

module.exports = {
  reactStrictMode: true, 
  images: {
    domains: ['res.cloudinary.com', 'placehold.co'],
  },
}

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")