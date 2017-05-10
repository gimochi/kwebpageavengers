var http = require('http');
var webpack = require('webpack');
var webpackConfig = require('../internals/webpack/webpack.dev.config');
var compiler = webpack(webpackConfig);
var app = (require('express'))();
var path = require('path');

var ROOTPATH = path.resolve('dist')

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  // publicPath: '/'
}));

app.get("*", function(req, res) {
  var index = path.resolve(ROOTPATH, 'index.html')
  res.sendFile(index);
});

if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || 7777, function () {
    console.log("Listening on %j", server.address());
  });
}