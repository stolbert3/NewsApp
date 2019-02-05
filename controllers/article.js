var db = require("../models");


var findAll = function(req, res) {
  db.Article
    .find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    });
};

module.exports = findAll;