'use strict';

function index(req, res) {
    var appUrl = req.protocol + '://' + req.get('host') + '/';
    res.render('index', { appUrl: appUrl });
}

module.exports = index;