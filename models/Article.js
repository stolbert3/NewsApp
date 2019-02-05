var mongoose = require("mongoose");
var Comments = require("./Comments.js");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
