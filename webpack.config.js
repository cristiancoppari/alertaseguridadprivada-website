const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/javascript/main.js",

  output: {
    path: path.resolve(__dirname, "public"),

    filename: "[name].js",

    // publicPath: "/public/javascripts"
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