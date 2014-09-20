var Product = require('./product');

var AppleProduct = function(){
	Product.call(this, 32, 'kg')
};
AppleProduct.prototype = Product.prototype;
AppleProduct.prototype.constructor = AppleProduct;


module.exports = AppleProduct;
