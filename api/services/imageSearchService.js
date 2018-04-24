'use strict;'

const qwant = require("./qwant.js");

var imageSearchService = {
    search: function (term, offset, callback) {
        qwant.images(term, offset, callback);
    }
}

module.exports = imageSearchService;