'use strict';

var server = require('server');
 
server.get('Demo', function (req, res, next) {
    
    var myvariable = "Just a string"
    res.render("training/vartest");
    return next();
});

module.exports = server.exports();
