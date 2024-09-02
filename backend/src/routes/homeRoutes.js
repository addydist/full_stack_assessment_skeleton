const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/find-by-user/:userId", homeController.findHomesByUser);
router.put("/update-users", homeController.updateUsersForHome);

module.exports = router;
