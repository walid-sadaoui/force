module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push('redis', 'request')

    return config
  },
}
