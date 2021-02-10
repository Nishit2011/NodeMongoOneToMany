
const express = require("express");
const router = express.Router();
const {addBook} = require("../controllers/book")

router.route("/:authorId/addbook").post(addBook);


module.exports = router;