$(document).ready(function() {

  $("#scrapeBtn").on("click", function() {
    $.ajax({
      method: "GET",
      url: "/scrape"
    }).done(function(data) {
      console.log(data)
      window.location = "/"
    })
  });

})