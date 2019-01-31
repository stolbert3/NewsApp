var db = require("../models");

module.exports = {
  find: function(req, res) {
    db.Comments.find({ _articleId: req.params.id }).then(function(dbComments) {
      res.json(dbComments);
    });
  },
  create: function(req, res) {
    db.Comments.create(req.body).then(function(dbComments) {
      res.json(dbComments);
    });
  }
};
