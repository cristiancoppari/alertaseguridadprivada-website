var express = require('express');
var router = express.Router();

const indexData = require("../data/index.js");
const contactoData = require("../data/contacto.js");
const rrhhData = require("../data/rrhh.js");

// Home page
router.get('/', function (req, res, next) {
  res.render('index', indexData);
});

// Contacto
router.get("/contacto", function (req, res) {
  res.render("contacto", contactoData);
})

// Contacto
router.get("/rrhh", function (req, res) {
  res.render("rrhh", rrhhData);
})

module.exports = router;
