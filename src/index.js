const express = require("express");
const Config = require("./config");

const app = express();

app.listen(Config.PORT, () => {
  console.log("Server connected!");
});
