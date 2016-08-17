import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { smart } from 'webpack-merge'
import { ROOT, SRC_DIR, MODULES_DIR, defaultConfig } from '../helpers'
import createAssetsConfig from './webpack.assets'
import createScriptsConfig from './webpack.scripts'
import createStylesConfig from './webpack.styles'
import createHotConfig from './webpack.hot'

const templateDir = `${ROOT}/.webpack/index.html`

function createConfig (conf) {
  conf = Object.assign({}, defaultConfig, conf)

  const baseConfig = {
    context: ROOT,
    entry: Array.isArray(conf.in) ? conf.in : [conf.in],
    resolve: {
      root: [SRC_DIR, MODULES_DIR]
    },
    output: {
      path: path.join(ROOT, conf.out),
      filename: 'bundle.js',
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
      new webpack.optimize.DedupePlugin(),
      new HtmlWebpackPlugin({
        template: conf.template ? path.join(ROOT, conf.template) : templateDir,
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

  return conf.hot
    ? smart(assetsConfig, scriptsConfig, stylesConfig, hotConfig, baseConfig)
    : smart(assetsConfig, scriptsConfig, stylesConfig, baseConfig)
}

export default createConfig
