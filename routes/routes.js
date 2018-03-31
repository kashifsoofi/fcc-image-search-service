'use strict';
var express = require("express");
var router = express.Router();

var index = require('../api/controllers/index.js');
var images = require('../api/controllers/images.js');
var searches = require('../api/controllers/searches.js');

router.get('/', index);
router.get('/api/search/:term', images);
router.get('/api/latest', searches);

module.exports = router