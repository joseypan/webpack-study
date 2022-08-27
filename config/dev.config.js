const path = require("path");
const config = {
  entry: "/src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
module.exports = config;
