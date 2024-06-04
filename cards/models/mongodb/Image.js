const mongoose = require("mongoose");
const { URL, DEFAULT_VALIDATION } = require("../../helpers/mongooseValidators");

const Image = new mongoose.Schema({
  url: URL,
  alt: DEFAULT_VALIDATION,
});

module.exports = Image;
