const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, `public`),
    open: true,
    historyApiFallback: true,
    // inline: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ],
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devtool: `source-map`,
};
