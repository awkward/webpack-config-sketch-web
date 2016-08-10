import path from 'path'
import autoprefixer from 'autoprefixer'
import inlineSvg from 'postcss-inline-svg'
import Config from 'webpack-config'

// Paths

const cwd = process.cwd() // current working directory
const srcDir = path.resolve(cwd, 'src')
const nodeModulesDir = path.resolve(cwd, 'node_modules')

// Loader regexes

const modulePathsTest = /(node_modules|bower_components)/
const scssTest = /\.scss$/
const cssTest = /\.css$/
const jsTest = /\.js$/

export const jsConfig = new Config().merge({
  module: {
    loaders: [
      {
        test: jsTest,
        exclude: modulePathsTest,
        loader: 'babel',
        cacheDirectory: true,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
})

export const cssConfig = new Config().merge({
  module: {
    loaders: [
      {
        test: cssTest,
        include: srcDir,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: scssTest,
        include: srcDir,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },
  postcss () {
    return [autoprefixer, inlineSvg]
  }
})

export const baseConfig = new Config().merge({
  context: cwd,
  entry: {
    main: './src'
  },
  resolve: {
    root: [srcDir, nodeModulesDir]
  },
  output: {
    path: path.join(cwd, 'build'),
    filename: 'bundle.js'
  }
}, jsConfig, cssConfig)

export default baseConfig
