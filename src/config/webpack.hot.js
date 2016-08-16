import webpack from 'webpack'

function createConfig (conf, webpackConfig) {
  const config = {
    entry: webpackConfig.entry.concat('webpack-hot-middleware/client'),
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }

  return config
}

export default createConfig
