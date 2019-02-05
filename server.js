/* 1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice
      and display them for the user. Each scraped article should be saved to your application database. At
      a minimum, the app should scrape and display the following information to each article:
      - Headline: the title of the article
      - Summary: a short summary of the article
      - URL: the url to the original article
      * Feel free to add more content to your database (photos, bylines, etc.)
   2. Users should also be able to leave comments on the articles displayed and revisit them later. The
      comments should be saved to the database as well and associated with their articles. Users should
      also be able to delete comments left on articles. All stored comments should be visible to every user.
  Tips:
    - Go back to Saturday's activities if you need a refresher on how to partner one model with another.
    - Whenever you scrape a site for stories, make sure an article isn't already represented in your database
      before saving it; Do not save any duplicate entries.
    - Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.
      * If your app deletes stories every time someone visits, your users won't be able to see any comments
        except the ones they post. */

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsappDB";
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
