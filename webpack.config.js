const devConfg = require("./config/dev.config");
const prodConfig = require("./config/prod.config");
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
  ...extraConfig,
};
