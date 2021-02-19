const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const webpack = require("webpack")

import { basePath, env } from "../utils/env"

const vendors = [
  "@artsy/backbone-mixins",
  "backbone-pageable",
  "backbone-super-sync",
  "backbone.paginator",
  "backbone",
  "jquery",
  "moment-timezone",
  "moment",
]

export const legacyArtworkDllConfig = {
  name: "legacy-artwork-dll",
  mode: env.webpackDebug ? "development" : env.nodeEnv,
  entry: vendors,
  output: {
    path: path.resolve(basePath, "public/assets-novo"),
    filename: "legacy-artwork-dll.[name]_[hash].js",
    library: "[name]_[hash]",
  },
  optimization: {
    concatenateModules: env.webpackConcatenate,
    usedExports: true,
    minimize: !env.webpackDebug,
    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: env.onCi ? env.webpackCiCpuLimit : true, // Only use 4 cpus (default) in CircleCI, by default it will try using 36 and OOM
        sourceMap: true, // Must be set to true if using source-maps in production
      }),
    ],
    runtimeChunk: false,
  },
  devtool: "source-map",
  plugins: [
    new webpack.DllPlugin({
      path: path.join(basePath, "manifest-legacy-artwork-dll.json"),
      name: "[name]_[hash]",
      context: path.resolve(basePath),
      entryOnly: true,
    }),
  ],
  resolve: {
    modules: [path.join(basePath), "node_modules"],
  },
  stats: "normal",
}
