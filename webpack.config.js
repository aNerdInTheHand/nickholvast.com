const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    hot: true,
    port: 8080,
    publicPath: 'index.html'
  }
}
