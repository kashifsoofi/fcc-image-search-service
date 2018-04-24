'use strict;'

var searchInfo = require('../models/searchInfo.js');

function recent(req, res) {
    var projection = {
        _id: false,
        __v: false
    };

    var query = searchInfo.find({}, projection, function (err, data) {
        if (err) {
            throw err;
        }

        res.json(data.reverse());
    });
}

module.exports = recent;