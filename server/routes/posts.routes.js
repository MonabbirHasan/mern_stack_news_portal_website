let uploadedFileName;
const express = require("express")
const authentication = require('../middleware/authentication')
const PostsController = require("../controllers/posts.controller")
const multer = require("multer");
const path = require('path')
const router = express.Router()
router.use(authentication)

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fullPath = path.join(
            __dirname,
            "..",
            "public",
            "uploads",
            "blog_img"
        );
        cb(null, fullPath);
    },
    filename: function (req, file, cb) {
        const uniqueName = Math.round(Math.random() * 5541e58);
        uploadedFileName = "_" + uniqueName + path.extname(file.originalname);
        cb(null, uploadedFileName);
        // console.log(file);
    },
});
// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

router.get("/", PostsController.all_posts)
router.post("/", upload.single("post_thumbnail"),
    (req, res, next) => {
        req.uploadedFileName = uploadedFileName;
        next();
    }, PostsController.create_posts)
router.get("/:id", PostsController.single_posts)
router.patch("/:id", upload.single("post_thumbnail"),
    (req, res, next) => {
        req.uploadedFileName = uploadedFileName;
        next();
    }, PostsController.update_posts)
router.delete("/:id", PostsController.delete_posts)
module.exports = router;