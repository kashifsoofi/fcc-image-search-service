'use strict;'

var moment = require("moment");

var searchInfo = require('../models/searchInfo.js');
var imageSearchService = require('../services/imageSearchService.js');

function search(req, res) {
    var term = req.params.term;
    var offset = req.query.offset;

    var currentSearch = new searchInfo({
        term: term,
        offset: offset,
        when: moment().toISOString()
    });

    currentSearch.save(function (err, objSaved) {
        if (err) {
            throw err;
        }
        console.log('Saved: ', objSaved);        
    });

    callback = function resultCallback(searchResults) {
        res.json(searchResults);
    }

    imageSearchService.search(term, offset, function (searchResults) {
        res.json(searchResults);
    });
}

module.exports = search;