import fs from 'fs'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import { ROOT } from '../helpers'

const webpackConfig = require(path.join(ROOT, 'webpack.config.js'))
const app = express()
const compiler = webpack(webpackConfig)

app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  hot: true
}))

app.use(WebpackHotMiddleware(compiler))

app.use('/public', express.static('public'))

app.get('*', function (req, res) {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(file.toString())
    }
  })
})

app.listen(3000, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
