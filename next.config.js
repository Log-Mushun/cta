const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest.json$/],
  maximumFileSizeToCacheInBytes: 4000000,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],     
      });
      config.module.rules.push({
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]   
      });
      config.module.rules.push({
        
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader?name=fonts/[name].[ext]!static'
         
         
      });
      return config;
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    }
}

module.exports = () => {
  const plugins = [withPWA]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}