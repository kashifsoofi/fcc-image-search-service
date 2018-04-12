'use strict';
var mongoose = require('mongoose');

var searchInfoSchema = new mongoose.Schema({
    term: String,
    offset: String,
    when: String
}, { capped: { size: 10000, max: 10 }});

var searchInfo = mongoose.model('searchInfo', searchInfoSchema);
module.exports = searchInfo;