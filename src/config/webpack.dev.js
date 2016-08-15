import webpack from 'webpack'
import { smart } from 'webpack-merge'
import createCommonConfig from './webpack.common'

function createConfig (conf) {
  const commonConfig = createCommonConfig(conf)

  const config = {
    entry: ['./src', 'webpack-hot-middleware/client'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }

  return smart(commonConfig, config)
}

export default createConfig
