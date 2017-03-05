/*
 config for webpack. Will be used in
 the Gulpfile for building our app.
 Does not need gulp in order to do so,
 but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
      {
        test: /\.js$/, loader: 'babel-loader',
        exclude: [/client\/lib/, /node_modules/, /\.spec\.js/],
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};