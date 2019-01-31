var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  user: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;