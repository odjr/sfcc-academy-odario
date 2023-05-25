'use strict'

var server = require('server');

server.get('MyAsset', function(req, res, next) {
    res.render('training/folder');
    return next();
});

server.get('Start', function(req, res, next) {

    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(req.querystring.pid);
    res.render('training/productfound', { product: product});
    return next();
});

server.get('RenderTemplate', function(req, res, next) {
    res.render("training/rendertemplate");
    return next();
});

server.get('TestRemoteInclude', function(req, res, next) {
    res.render("training/testremoteinclude");
    return next();
})

server.get('TestDecorator', function(req, res, next) {
    var any = req.querystring.any;
    var text = 'Hello ' + any;
    res.render('training/testdecorator', { hw : text });
    return next();
});

server.get('Basket', function(req, res, next) {
    var BasketMgr = require('dw/order/BasketMgr');

    var currentBasket = BasketMgr.getCurrentBasket();

    res.render('training/showBasket', { currentBasket: currentBasket});
    return next();
});


server.get('TestModule', function(req, res, next) {
    res.render('training/testmodule');
    return next();
});

server.get('FinalModule', function(req, res, next) {
    var ProductMgr = require('dw/catalog/ProductMgr');
    var prod = ProductMgr.getProduct(req.querystring.pid);
    res.render('training/finalmodule', { tst : tst});
    return next();
});

module.exports = server.exports();

