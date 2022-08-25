module.exports = {
  entry: {
    index: "./src/index.js",
    test: "./src/test.js",
  },
  output: {
    filename: "[name]-[hash].js",
    path: __dirname + "/output",
  },
  mode: "production",
};
