const express = require('express');
const app = express();
var routes = require('./routes.js')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const port = process.env.PORT || 8080;


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

//for cookies
app.use(cookieParser());

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());


//import routes from routes.js
app.use('/', routes)


// create a GET route
app.get('/', (req, res) => {
    res.send('<html><head></head><body style="background-color:navy; color: snow"><h1> hello world! </h1> user entered from ' + req.PORT + ' </body></html>');

});
