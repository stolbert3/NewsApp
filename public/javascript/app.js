$("#scrapeBtn").on("click", function() {
  $.ajax({
    type: "GET",
    url: "/scrape",
    data: "",
    success: function(data) {
      console.log(data);
      window.location = "/"
    }
  });
  console.log("clicked");
});