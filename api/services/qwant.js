'use strict;'

const request = require("request");

const userAgentString = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0";
const baseUrl = "https://api.qwant.com/api/search/images?t=images";

var qwant = {
    images: function (query, offset = 0, callback) {
        var url = baseUrl + "&locale=en_en&q=" + encodeURIComponent(query) + "&count=10&offset=" + offset;
        let options = {
            url: url,
            method: "GET",
            headers: { "User-Agent": userAgentString }
        };

        request(options, function (err, response, body) {
            if (err) {
                console.log("Error calling API: " + err);
            }
            
            var searchResults = [];
            let content = JSON.parse(body);
            if (content.status == 'success') {
                var result = content.data.result;
                for (var i = 0; i < result.items.length; i++) {
                    searchResults.push({
                        imageUrl: result.items[i].media,
                        altText: result.items[i].title,
                        pageUrl: result.items[i].url
                    });
                }
            }
            return callback(searchResults);
        });
    }
}

module.exports = qwant;
