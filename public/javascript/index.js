$(document).ready(function() {
  var articleContainer = $("#articles");
  var commentContainer = $("#comments");
  $(".btn").on("click", function() {
    handleArticleScrape;
  });

  function initPage() {
    $.get("/api/article").then(function(data) {
      articleContainer.empty();
      if (data && data.length) {
        renderArticles(data);
      }
    });
  }

  function renderArticles(articles) {
    var articleInfo = [];
    for (var i = 0; i < articles.length; i++) {
      var articleHead = articles[i].headline;
      var articleSumm = articles[i].summary;
      var articleUrl = articles[i].url;
      articleInfo.push(articleHead);
      articleInfo.push(articleSumm);
      articleInfo.push(articleUrl);
    }
    articleContainer.append(articleInfo);
  }

  function handleArticleScrape() {
    $.get("/api/fetch").then(function(data) {
      initPage();
      console.log(data);
    });
  }
});
