const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;
