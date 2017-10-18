const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
    vendor: [
      "lodash"
    ],
    another: "./src/another-module.js"
  },
  output: {
    filename: "[name].bundle.[chunkhash].js",
    chunkFilename: "[name].bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.tmpl.html")
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    // Note that order matters here. The 'vendor' instance of the CommonsChunkPlugin must be included prior to the 'runtime' instance.
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    })
  ]
};