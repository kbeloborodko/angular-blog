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
      { test: /\.styl$/, loader: 'css-loader!style-loader!stylus-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?stage=1'
      }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
