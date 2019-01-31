var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

var Comments = mongoose.model("Article", CommentsSchema);

module.exports = Comments;