var Product = require('./product');

/**
 * Light Product
 * @constructor
 */
var LightProduct = function(){
	Product.call(this, 15, 'year')
};

LightProduct.prototype = Product.prototype;
LightProduct.prototype.constructor = LightProduct;

module.exports = LightProduct;
