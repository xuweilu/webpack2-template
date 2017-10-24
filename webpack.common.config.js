const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
    vendor: [
      "react", "react-dom"
    ],
    polyfills: "./src/polyfills.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        options: {
          fix: true,
        }
      },
      {
        test: require.resolve("./libs/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
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
      // lodash: "lodash"
      join: ["lodash", "join"]
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    // Note that order matters here. The "vendor" instance of the CommonsChunkPlugin must be included prior to the "runtime" instance.
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),
  ]
};