const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const router = require("./routes/routes.js");

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/fcc-image-search-app', function (err) {
    if (err) {
        throw new Error("Database connection failed.");
    }
    else {
        console.log("Database connection successful.");
    }

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use('/', router);

    var options = {
        explorer: true
    };
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

    var port = process.env.PORT || 8080;
    app.listen(port, function() {
        console.log('Image Search Abstraction Microservice listening on port ' + port + '!');
    });
});