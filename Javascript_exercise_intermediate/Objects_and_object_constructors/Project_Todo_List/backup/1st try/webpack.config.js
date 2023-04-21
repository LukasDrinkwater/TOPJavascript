const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.resolve(__dirname, "./src/template.html"),
      inject: false,
    }),
  ],
};
