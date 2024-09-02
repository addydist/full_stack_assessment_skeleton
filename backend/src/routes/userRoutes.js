const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/find-all", userController.findAllUsers);
router.get("/find-by-home/:homeId", userController.findUsersByHome);
module.exports = router;
