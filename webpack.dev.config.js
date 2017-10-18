const merge = require("webpack-merge");
const common = require("./webpack.common.config");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    port: process.env.PORT || 8080,
    inline: true,
  }
});