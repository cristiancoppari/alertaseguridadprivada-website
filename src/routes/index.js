var express = require('express');
var router = express.Router();

const indexData = require("../data/index.js")

// Home page
router.get('/', function (req, res, next) {
  res.render('index', indexData);
});

module.exports = router;
