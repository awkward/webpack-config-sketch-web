import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import inlineSvg from 'postcss-inline-svg'
import { isProd } from '../helpers'

const cssTest = /^((?!\.module).)*\.css$/
const scssTest = /^((?!\.module).)*\.scss$/
const cssModuleTest = /\.module.css$/
const scssModuleTest = /\.module.scss$/

const cssLoaders = [
  {
    test: cssTest,
    loaders: ['style', 'css', 'postcss']
  },
  {
    test: scssTest,
    loaders: ['style', 'css', 'postcss', 'sass']
  },
  {
    test: cssModuleTest,
    loaders: ['style', 'css?modules&importLoaders=1', 'postcss']
  },
  {
    test: scssModuleTest,
    loaders: ['style', 'css?modules&importLoaders=2', 'postcss', 'sass']
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

  config.plugins = isProd ? [new ExtractTextPlugin('styles.css')] : []

  return config
}

export default createConfig
