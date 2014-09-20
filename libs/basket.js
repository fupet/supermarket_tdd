/**
 * Basket
 *
 * @constructor
 */
var Basket = function() {
	/**
	 * Products added
	 * @type {Array}
	 */
	this.products = [];
};

/**
 *
 * @param product {Product}
 * @param amount {number}
 */
Basket.prototype.addProductWithAmount = function(product, amount) {
	if ('object' !== typeof product) {
		throw new Error('Invalid product!');
	}

	if (!Basket.isInt(amount) || amount < 1) {
		throw new Error('Invalid amount!');
	}

	this.products.push([product, amount]);
};

Basket.isInt = function(n){
	return ('number' === typeof n) && isFinite(n) && (0 === n % 1);
};

module.exports = Basket;