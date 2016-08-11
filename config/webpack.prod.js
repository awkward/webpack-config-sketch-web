import { smart } from 'webpack-merge'
import createCommonConfig from './webpack.common'

function createConfig (conf) {
  const commonConfig = createCommonConfig(conf)

  const config = {}

  return smart(commonConfig, config)
}

export default createConfig
