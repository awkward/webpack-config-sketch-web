import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { smart } from 'webpack-merge'
import { ROOT, SRC_DIR, MODULES_DIR, defaultConfig, isDev } from '../helpers'
import createAssetsConfig from './webpack.assets'
import createScriptsConfig from './webpack.scripts'
import createStylesConfig from './webpack.styles'
import createHotConfig from './webpack.hot'

const ensureArray = (a) => Array.isArray(a) ? a : [a]

function createConfig (conf) {
  conf = Object.assign({}, defaultConfig, conf)

  const baseConfig = {
    // Don't attempt to continue if there are any errors.
    bail: true,
    context: ROOT,
    entry: [require.resolve('./polyfills.js')].concat(ensureArray(conf.in)),
    resolve: {
      root: [SRC_DIR, MODULES_DIR]
    },
    output: {
      path: path.join(ROOT, conf.out),
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
      publicPath: '/'
    },
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.optimize.DedupePlugin(), // Disabled for now because it causes problems
      new HtmlWebpackPlugin({
        template: conf.template ? path.join(ROOT, conf.template) : path.join(ROOT, 'src/index.html'),
        hash: false,
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  }

  if (conf.globals) {
    baseConfig.plugins.unshift(new webpack.DefinePlugin(conf.globals))
  }

  const assetsConfig = createAssetsConfig(conf)
  const scriptsConfig = createScriptsConfig(conf)
  const stylesConfig = createStylesConfig(conf)
  const hotConfig = createHotConfig(conf, baseConfig)

  return (isDev && conf.hot)
    ? smart(assetsConfig, scriptsConfig, stylesConfig, hotConfig, baseConfig)
    : smart(assetsConfig, scriptsConfig, stylesConfig, baseConfig)
}

export default createConfig
