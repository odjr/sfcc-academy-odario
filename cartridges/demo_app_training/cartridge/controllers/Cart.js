'use strict';

var server = require('server');

//if using same name
server.extend(module.superModule);
//if using different name
//var controller = require('app_storefront_base/cartridge/controller/Cart');
//module.extend(controller);

server.append('Show', function(req, res, next) {

    var viewData = res.getViewData();

    viewData.example = "One String";

    res.setViewData(viewData);

    return next();

})


module.exports = server.exports();
