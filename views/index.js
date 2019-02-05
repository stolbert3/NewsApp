var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  db.Article.findAll()
    .then(function(dbArticles) {
      res.render("home", { articles: dbArticles });
    });
});

module.exports = router;
