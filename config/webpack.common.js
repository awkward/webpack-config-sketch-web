import path from 'path'
import { smart } from 'webpack-merge'
import { ROOT, SRC_DIR, MODULES_DIR } from './helpers'
import createAssetsConfig from './webpack.assets'
import createScriptsConfig from './webpack.scripts'
import createStylesConfig from './webpack.styles'

function createConfig (conf) {
  const assetsConfig = createAssetsConfig(conf)
  const scriptsConfig = createScriptsConfig(conf)
  const stylesConfig = createStylesConfig(conf)

  const config = smart({
    context: ROOT,
    entry: {
      main: './src'
    },
    resolve: {
      root: [SRC_DIR, MODULES_DIR]
    },
    output: {
      path: path.join(ROOT, 'build'),
      filename: 'bundle.js'
    }
  }, conf)

  return smart(assetsConfig, scriptsConfig, stylesConfig, config)
}

export default createConfig
