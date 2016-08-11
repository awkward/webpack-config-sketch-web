import { modulePathsTest } from './helpers'

const jsTest = /\.js$/

function createConfig (conf) {
  const config = {
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

  return config
}

export default createConfig
