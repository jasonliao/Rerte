module.exports = {
  entry: [
    './test/index.js'
  ],
  output: {
    path: __dirname + '/test/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ 
      test: /\.jsx?$/, 
      loader: 'babel'
    }]
  }
};
