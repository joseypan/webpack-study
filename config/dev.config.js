const path = require("path");
const config = {
  entry: {
    index: "/src/index.js",
    demo: "/src/demo.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
};
module.exports = config;
