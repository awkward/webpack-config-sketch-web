import 'babel-register'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import connectHistoryApi from 'connect-history-api-fallback'
import { ROOT } from '../helpers'

const webpackConfig = require(path.join(ROOT, 'webpack.config.js'))
const app = express()
const compiler = webpack(webpackConfig)

app.use(connectHistoryApi({
  verbose: false
}))

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  hot: true
}))

app.use(WebpackHotMiddleware(compiler))

app.use('/public', express.static('public'))

app.listen(3000, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
