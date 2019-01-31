var router = require("express").Router();
var noteController = require("../../controllers/comment");

router.get("/:id", noteController.find);
router.post("/", noteController.create);

module.exports = router;
