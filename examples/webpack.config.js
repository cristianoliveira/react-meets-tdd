const webpack = require('webpack');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
};
