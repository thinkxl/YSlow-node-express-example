var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;
var routes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


//module.exports = app;
app.listen(port);
console.log("Server in port: " + 5000);
