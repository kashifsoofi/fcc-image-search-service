'use strict';
var mongoose = require('mongoose');

var searchInfoSchema = new mongoose.Schema({
    term: String,
    when: String
});

var SearchInfo = mongoose.model('SearchInfo', searchInfoSchema);
module.exports = SearchInfo;