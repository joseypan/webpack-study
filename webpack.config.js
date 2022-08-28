const devConfg = require("./config/dev.config");
const prodConfig = require("./config/prod.config");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const extraConfig =
  process.env.NODE_ENV === "development" ? devConfg : prodConfig;
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugins({ template: "./src/index.html", chunks: ["index"] }),
    new HtmlWebpackPlugins({
      template: "./src/test.html",
      filename: "test_html",
      chunks: ["demo"],
    }),
  ],
  ...extraConfig,
};
