/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack5: true, // Need to make it true for some versions of Next JS
  distDir: 'build', // Defined build directory
  webpack: (config, options) => { // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"fe1",
        filename: "remoteEntry.js", // remote file name which will used later
        remoteType: "var",
        exposes: { // expose all component here.
          "./blog-list": "./src/components/BlogList"
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.crm.sg.content-cdn.io',
        port: '',
        pathname: '/cdn-cgi/image/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.crm.eu.content-cdn.io',
        port: '',
        pathname: '/cdn-cgi/image/**',
      },
    ],
  },
}

module.exports = nextConfig
