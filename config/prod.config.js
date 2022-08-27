const path = require("path");
const config = {
  entry: "/src/test.js",
  output: {
    filename: "test.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
module.exports = config;
