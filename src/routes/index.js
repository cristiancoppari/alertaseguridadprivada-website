var express = require('express');
var router = express.Router();

const indexData = require("../data/index.js");
const contactoData = require("../data/contacto.js");
const rrhhData = require("../data/rrhh.js");
const nosotrosData = require("../data/nosotros.js");
const serviciosData = require('../data/servicios.js');

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

// Nosotros
router.get("/nosotros", function (req, res) {
  res.render("nosotros", nosotrosData);
})

// Servicios
router.get("/servicios", function (req, res) {
  res.render("servicios", serviciosData);
})

module.exports = router;
