export const imagesConfig = {
  module: {
    loaders: [
      {
        test: /\.svg/,
        loader: 'svg-inline?classPrefix!image-webpack'
      },
      {
        test: /\.png/,
        loader: 'url?limit=100000&minetype=image/png!image-webpack'
      },
      {
        test: /\.jpg/,
        loader: 'file!image-webpack'
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

export default imagesConfig
