import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import inlineSvg from 'postcss-inline-svg'
import { SRC_DIR, isProd } from './helpers'

const cssTest = /^((?!\.module).)*\.css$/
const scssTest = /^((?!\.module).)*\.scss$/
const cssModuleTest = /\.module.css$/
const scssModuleTest = /\.module.scss$/

const cssLoaders = [
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

// Extract styles to separate .css bundle in production
const extractStyles = cssLoaders.map(loader => {
  const [first, ...rest] = loader.loaders
  return {
    test: loader.test,
    include: loader.include,
    loader: ExtractTextPlugin.extract(first, rest.join('!'))
  }
})

function createConfig (conf) {
  const config = {
    module: {
      loaders: isProd ? extractStyles : cssLoaders
    },
    postcss () {
      return [autoprefixer, inlineSvg]
    }
  }

  config.plugins = [
    new ExtractTextPlugin('styles.css')
  ]

  console.log(isProd, config.module.loaders)

  return config
}

export default createConfig
