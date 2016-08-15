import autoprefixer from 'autoprefixer'
import inlineSvg from 'postcss-inline-svg'
import { SRC_DIR } from './helpers'

const scssTest = /\.scss$/
const cssTest = /\.css$/

function createConfig (conf) {
  const config = {
    module: {
      loaders: [
        {
          test: cssTest,
          include: SRC_DIR,
          loaders: ['style', 'css', 'postcss']
        },
        {
          test: scssTest,
          include: SRC_DIR,
          loaders: ['style', 'css', 'postcss', 'sass']
        }
      ]
    },
    postcss () {
      return [autoprefixer, inlineSvg]
    }
  }

  return config
}

export default createConfig
