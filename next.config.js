module.exports = {
  env: {
    METAPHYSICS_ENDPOINT: process.env.METAPHYSICS_ENDPOINT,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push("redis", "request")
    return config
  },
}
