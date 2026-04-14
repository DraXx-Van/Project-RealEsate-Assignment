const mongoose = require('mongoose');

const ContentScheme = new mongoose.Schema({
  heroText: String,
  overview: String,
  amenities: String,
  about: String,
  faq: String,
  connectivity: String,
  construction: String
});

module.exports = mongoose.model("Content",ContentScheme);