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
});

$(".save").on("click", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      type: "POST",
      url: "/articles/save/" + thisId,
      data: "",
      success: function(data) {
        console.log(data);
        window.location = "/"
      }
  });
});