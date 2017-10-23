const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    polyfills: "./src/polyfills.js",
    app: path.resolve(__dirname, "src/index.js"),
    vendor: [
      "react", "react-dom"
    ]
  },
  module: {
    rules: [
      {
        test: require.resolve("./libs/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.tmpl.html")
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({
      // lodash: 'lodash'
      join: ["lodash", "join"]
    }),
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