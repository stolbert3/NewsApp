var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeHeadlines);

console.log(fetchController.scrapeHeadlines);

module.exports = router;
