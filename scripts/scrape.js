var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("https://www.huffingtonpost.com/section/front-page/feed").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];

    $("channel item").each(function(i, element) {

      var result = {};

      result.head = $(this).find("title").text().trim();
      console.log("Head: " + result.head);

      result.summ = $(this).find("description").text().trim();
      console.log("Summ: " + result.summ);

      result.url = $(this).find("link").attr("href");
      console.log("Url: " + result.url);

      articles.push(result)
      console.log(result);
    });
    return articles;
  });
};

console.log("Scrape output: " + scrape());

module.exports = scrape;