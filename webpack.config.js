const devConfg = require("./config/dev.config");
const prodConfig = require("./config/prod.config");
module.exports = process.env.NODE_ENV === "development" ? devConfg : prodConfig;
