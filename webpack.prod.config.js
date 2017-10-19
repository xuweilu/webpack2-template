const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.[chunkhash].js",
    chunkFilename: "[name].bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});