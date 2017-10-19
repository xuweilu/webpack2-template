const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
    vendor: [
      "lodash"
    ],
    another: "./src/another-module.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     "css-loader"
      //   ]
      // },
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
      },

    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.tmpl.html")
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    // Note that order matters here. The 'vendor' instance of the CommonsChunkPlugin must be included prior to the 'runtime' instance.
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),
  ]
};