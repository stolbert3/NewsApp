var router = require("express").Router();

var fetchRoutes = require("./fetch");
var commentRoutes = require("./comment");
var articleRoutes = require("./article");

router.use("/fetch", fetchRoutes);
router.use("/comments", commentRoutes);
router.use("/articles", articleRoutes);

module.exports = router;
