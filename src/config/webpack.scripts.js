import webpack from 'webpack'
import { modulePathsTest, isProd } from './helpers'

const jsTest = /\.js$/

function createConfig (conf) {
  const config = {
    module: {
      loaders: [
        {
          test: jsTest,
          exclude: modulePathsTest,
          loader: 'babel',
          cacheDirectory: true,
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      ]
    }
  }

  if (isProd) {
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      })
    ]
  }

  return config
}

export default createConfig
