import autoprefixer from 'autoprefixer'
import inlineSvg from 'postcss-inline-svg'
import { srcDir } from './shared'

const scssTest = /\.scss$/
const cssTest = /\.css$/

export const cssConfig = {
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
}

export default cssConfig
