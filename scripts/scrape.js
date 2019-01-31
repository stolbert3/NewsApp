var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("https://www.huffingtonpost.com/section/front-page/feed").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];

    $("channel.item").each(function(i, element) {

      var head = $(this)
        .find("title")
        .text()
        .trim();

      var summ = $(this)
      .find("description")
      .text()
      .trim();

      var url = $(this)
        .find("link")
        .attr("href");

      if (head && summ && url) {
        var dataToAdd = {
          headline: head,
          summary: summ,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;
