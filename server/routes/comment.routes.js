const express = require('express')
const authentication = require("../middleware/authentication")
const CommentController = require('../controllers/comment.controller')
const router = express.Router()
router.use(authentication)
router.get("/", CommentController.all_comment)
router.post("/", CommentController.create_comment)
router.get("/:id", CommentController.single_comment)
router.patch("/:id", CommentController.update_comment)
router.delete("/:id", CommentController.delete_comment)
module.exports = router;