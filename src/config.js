const dotenv = require("dotenv");
const { model } = require("mongoose");

dotenv();

const PORT = process.env.PORT || 5000;

module.exports = { PORT };
