import path from 'path'
import autoprefixer from 'autoprefixer'
import inlineSvg from 'postcss-inline-svg'

// Paths

const cwd = process.cwd() // current working directory
const srcDir = path.resolve(cwd, 'src')
const nodeModulesDir = path.resolve(cwd, 'node_modules')

// Loader regexes

const modulePathsTest = /(node_modules|bower_components)/
const scssTest = /\.scss$/
const cssTest = /\.css$/
const jsTest = /\.js$/

const config = {
  context: cwd,
  resolve: {
    root: [srcDir, nodeModulesDir]
  },
  module: {
    loaders: [
      {
        test: jsTest,
        exclude: modulePathsTest,
        loader: 'babel',
        cacheDirectory: true,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: cssTest,
        exclude: modulePathsTest,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: scssTest,
        exclude: modulePathsTest,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },
  postcss () {
    return [autoprefixer, inlineSvg]
  }
}

export default config
