const express = require("express")
const authentication = require("../middleware/authentication")
const UserController = require("../controllers/users.controller")
const router = express.Router()
router.use(authentication)
router.get("/", UserController.all_users)
router.post("/", UserController.ragister_user)
router.get("/:id", UserController.single_users)
router.post("/login", UserController.login_user)
router.patch("/:id", UserController.update_users)
router.post("/logout", UserController.user_logout)
router.delete("/:id", UserController.delete_users)
module.exports = router;