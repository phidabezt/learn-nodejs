const express = require("express");
const { getHomepage, getEjs } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ejs", getEjs);

module.exports = router;
