module.exports = {
  env: {
    METAPHYSICS_ENDPOINT: process.env.METAPHYSICS_ENDPOINT,
    GEMINI_CLOUDFRONT_URL: process.env.GEMINI_CLOUDFRONT_URL,
  },
  publicRuntimeConfig: {
    METAPHYSICS_ENDPOINT: process.env.METAPHYSICS_ENDPOINT,
    GEMINI_CLOUDFRONT_URL: process.env.GEMINI_CLOUDFRONT_URL,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push("redis", "request")
    return config
  },
}
