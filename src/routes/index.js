var express = require('express');
var router = express.Router();

const indexData = require("../data/index.js");
const contactoData = require("../data/contacto.js");

// Home page
router.get('/', function (req, res, next) {
  res.render('index', indexData);
});

router.get("/contacto", function (req, res) {
  res.render("contacto", contactoData);
})

module.exports = router;
