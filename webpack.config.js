const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    app: './assets/js/index'
  },
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      chunkFilename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        },
        { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }
      ]
  },

  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js', '.jsx']
  }
};
