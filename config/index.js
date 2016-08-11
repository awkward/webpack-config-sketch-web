import assets from './webpack.assets'
import scripts from './webpack.scripts'
import styles from './webpack.styles'
import common from './webpack.common'
import dev from './webpack.dev'
import prod from './webpack.prod'

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
