var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(articles) {
        return db.Article.create(articles);
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
