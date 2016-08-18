const svgTest = /^((?!\.inline).)*\.svg$/i
const imagesTest = /.*\.(gif|png|jpe?g)$/i
const inlineSvgTest = /\.inline\.svg/i

function createConfig (conf) {
  const config = {
    module: {
      loaders: [
        {
          test: imagesTest,
          loaders: [
            'url?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
          ]
        },
        {
          test: svgTest,
          loaders: [
            'url?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
          ]
        },
        {
          test: inlineSvgTest,
          loaders: [
            'svg-inline?classPrefix',
            'image-webpack'
          ]
        }
      ]
    },
    imageWebpackLoader: {
      svgo: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeEmptyAttrs: false
          }
        ]
      }
    }
  }

  return config
}

export default createConfig
