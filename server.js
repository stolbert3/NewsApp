var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");

var Article = require("./models/Article.js");
var Comments = require("./models/Comments.js");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsappDB";
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

//Routes

//Get all articles
app.get("/", function(req, res) {
  Article.find({}, function(error, data) {
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

//Scrape articles
app.get("/scrape", function (req,res) {
  axios.get("https://www.huffingtonpost.com/section/front-page/feed").then(function(res) {
    var $ = cheerio.load(res.data);

    $("channel item").each(function(i, element) {
      var result = {};

      result.headline = $(this).find("title").text().trim();
      result.summary = $(this).find("description").text().trim();
      result.url = $(this).find("guid").text();

      var newArticle = new Article(result);
      
      newArticle.save(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(doc);
        }
      });
    });
    res.send("Scrape Complete");
  });
})

//Get all saved articles
app.get("/saved", function(req, res) {
  Article.find({"saved": true}).populate("comments").exec(function(error, articles) {
    var hbsObject = {
      article: articles
    };
    res.render("saved", hbsObject);
  });
});

//Save a new article
app.post("/articles/save/:id", function(req, res) {
  Article.findOneAndUpdate({ "_id": req.params.id }, { "saved": true })
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

//Delete an article
app.post("/articles/delete/:id", function(req, res) {
  Article.findOneAndUpdate({ "_id": req.params.id }, { "saved": false })
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});