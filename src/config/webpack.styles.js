import autoprefixer from 'autoprefixer'
import inlineSvg from 'postcss-inline-svg'
import { SRC_DIR } from './helpers'

const cssTest = /^((?!\.module).)*\.css$/
const scssTest = /^((?!\.module).)*\.scss$/
const cssModuleTest = /\.module.css$/
const scssModuleTest = /\.module.scss$/

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
        },
        {
          test: cssModuleTest,
          include: SRC_DIR,
          loaders: ['style', 'css?modules', 'postcss']
        },
        {
          test: scssModuleTest,
          include: SRC_DIR,
          loaders: ['style', 'css?modules', 'postcss', 'sass']
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
