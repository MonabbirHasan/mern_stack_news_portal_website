const express = require("express");
const authentication = require("../middleware/authentication");
const VisitorController = require("../controllers/visitor.controller");
const router = express.Router();
router.use(authentication);
router.get("/", VisitorController.all_visitor);
router.get("/:id", VisitorController.single_visitor);
router.post("/", VisitorController.create_visitor);
router.patch("/:id", VisitorController.update_visitor);
router.delete("/:id", VisitorController.delete_visitor);
module.exports = router;
