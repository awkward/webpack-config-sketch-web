import webpack from 'webpack'
import { modulePathsTest, isProd } from '../helpers'

const jsTest = /\.js$/

function createConfig (conf) {
  const config = {
    module: {
      loaders: [
        {
          test: jsTest,
          exclude: modulePathsTest,
          loader: 'babel',
          query: {
            presets: [
              'es2015',
              'react',
              'stage-0'
            ],
            plugins: ['transform-runtime'],
            cacheDirectory: true,
            env: {
              development: {
                presets: ['react-hmre']
              }
            }
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
          warnings: false,
          screw_ie8: true
        }
      })
    ]
  }

  return config
}

export default createConfig
