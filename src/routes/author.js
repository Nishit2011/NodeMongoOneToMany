const express = require("express");
const router = express.Router();
const {addAuthor, getAllAuthors, getBookByAuthor} = require("../controllers/author")

router.route("/addAuthor").post(addAuthor);
router.route("/:authorId/getBooks").get(getBookByAuthor);
router.route("/").get(getAllAuthors);


module.exports = router;