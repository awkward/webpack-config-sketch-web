import assets from './config/webpack.assets'
import scripts from './config/webpack.scripts'
import styles from './config/webpack.styles'
import common from './config/webpack.common'
import dev from './config/webpack.dev'
import prod from './config/webpack.prod'

const webpack = {
  assets,
  scripts,
  styles,
  common,
  dev,
  prod
}

export default {
  webpack
}
