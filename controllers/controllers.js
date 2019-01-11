const express = require("express");
const router = express.Router();

router.index = (req, res) => {
  res.render("index");
};

router.about = (req, res) => {
  res.render("about");
};

router.contact = (req, res) => {
  res.render("contact");
};

module.exports = router;
