var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("https://www.huffingtonpost.com/section/front-page/feed").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];

    $("channel item").each(function(i, element) {

      var result = {};

      result.headline = $(this).find("title").text().trim();
      //console.log("Head: " + result.headline);

      result.summary = $(this).find("description").text().trim();
      //console.log("Summ: " + result.summary);

      result.url = $(this).find("guid").text();
      //console.log("Url: " + result.url);

      articles.push(result)
    });
    return articles;
  });
};

module.exports = scrape;