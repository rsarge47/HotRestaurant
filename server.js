var express = require('express')
var path = require('path');
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// app routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// establish connection
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});