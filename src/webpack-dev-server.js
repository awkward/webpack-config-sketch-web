const Koa = require('koa')
const webpack = require('webpack')

const webpackConfig = require('./dev.config')
const compiler = webpack(webpackConfig)

const host = process.env.HOST || 'localhost'
const port = parseInt(process.env.PORT, 10) + 1 || 3001
const serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
}

const app = new Koa()

app.use(require('koa-webpack-dev-middleware')(compiler, serverOptions))
app.use(require('koa-webpack-hot-middleware')(compiler))

app.listen(port)
app.on('error', function (err, context) {
  console.error(err, context)
})
console.info('==> 🚧  Webpack development server listening on port %s', port)
