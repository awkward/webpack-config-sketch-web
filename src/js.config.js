import { modulePathsTest } from './shared'

const jsTest = /\.js$/

export const jsConfig = {
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
}

export default jsConfig
