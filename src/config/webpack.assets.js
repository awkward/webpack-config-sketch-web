function createConfig (conf) {
  const config = {
    module: {
      loaders: [
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
          ]
        },
        {
          test: /\.inline\.svg/i,
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
