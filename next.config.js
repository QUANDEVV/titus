/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig




// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

// const path = require('path');

// module.exports = {
//   reactStrictMode: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(mp4|webm)$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//           publicPath: '/_next/static/videos',
//           outputPath: path.join(config.outputPath, 'static/videos')
//         }
//       }
//     });

//     return config;
//   }
// };

