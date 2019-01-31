var router = require("express").Router();
var articleController = require("../../controllers/article");

router.get("/", articleController.findAll);

module.exports = router;