var db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .then(function(dbArticle) {
        res.json(dbArticle);
      });
  }
}