const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    port: process.env.PORT || 8080,
    inline: true,
    open: true
  }
});