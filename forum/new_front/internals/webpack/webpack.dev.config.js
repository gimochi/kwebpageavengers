var path = require('path');
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  entry: [
    './src/app.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve('dist', 'bundle')
    // publicPath: path.resolve('dist')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devtool: "source-map",

  resolve: {
    extensions: [".js", '.jsx'],
    alias: {
      '@': resolve('dist')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:4]'
            }
          },
          {
            loader: "sass-loader"
          }
        ],
        // include: path.resolve(__dirname, '..', '..', 'src')
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

module.exports = config;