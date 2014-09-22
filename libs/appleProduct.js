var Product = require('./product');

/**
 * Apple Product
 * @constructor
 */
var AppleProduct = function(){
	Product.call(this, 32, 'kg')
};

AppleProduct.prototype = Product.prototype;
AppleProduct.prototype.constructor = AppleProduct;

module.exports = AppleProduct;
