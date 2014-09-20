var Product = require('./product');

var StarshipProduct = function(){
	Product.call(this, 999.99, 'piece')
};
StarshipProduct.prototype = Product.prototype;
StarshipProduct.prototype.constructor = StarshipProduct;

module.exports = StarshipProduct;
