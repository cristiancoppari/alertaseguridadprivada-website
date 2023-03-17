const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    servicios: "./src/javascript/servicios.js",
    // modules: "./src/javascript/modules.js",
  },

  output: {
    path: path.resolve(__dirname, "public"),

    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  devtool: "source-map"
}