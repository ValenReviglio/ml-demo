const path = require('path');
const { readdirSync, existsSync } = require('fs');

const entries = {};

readdirSync('./modules').forEach((packageName) => {
  const index = `./modules/${packageName}/index.js`;
  if (existsSync(index) && packageName !== 'all') {
    entries[`../modules/${packageName}/build/index`] = index;
  }
});

module.exports = {
  mode: 'production',
  entry: entries,
  resolve: {
    alias: {
      '@my-ui': '../../',
    },
  },
  output: {
    libraryTarget: 'commonjs2',
    library: '[name]',
    path: path.join(path.resolve('.'), './build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}