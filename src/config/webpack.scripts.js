import webpack from 'webpack'
import { modulePathsTest, isProd } from '../helpers'
import deepmerge from 'deepmerge'

const jsTest = /\.js$/

function createConfig (conf) {
  // Deep merge default Babel config with user's Babel config
  const babelConfig = deepmerge({
    babelrc: false,
    presets: [
      require.resolve('babel-preset-es2015'),
      require.resolve('babel-preset-stage-0'),
      require.resolve('babel-preset-react')
    ],
    cacheDirectory: true,
    env: {
      development: {
        presets: [require.resolve('babel-preset-react-hmre')]
      }
    }
  }, conf.babel)

  const config = {
    module: {
      loaders: [
        {
          test: jsTest,
          exclude: modulePathsTest,
          loader: 'babel',
          query: babelConfig
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
