import webpack from 'webpack'
import { smart } from 'webpack-merge'
import createCommonConfig from './webpack.common'

function createConfig (conf) {
  const commonConfig = createCommonConfig(conf)

  const config = {
    entry: ['webpack-hot-middleware/client', './src'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }

  return smart(commonConfig, config)
}

export default createConfig
