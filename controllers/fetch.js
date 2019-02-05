var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return articles.forEach(function(article) {
          db.Article.insertOne({
            headline: article.headline.text(),
            summary: article.summary.text(),
            url: article.url.text()
          });
        });
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};