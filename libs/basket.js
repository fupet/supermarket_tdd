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
	this.products = {};
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

	if(product in this.products) {
		this.products[product] += amount;
	}
	else {
		this.products[product] = amount;
	}
};

Basket.prototype.countProducts = function(){
	return Object.keys(this.products).length;
};

Basket.isInt = function(n){
	return ('number' === typeof n) && isFinite(n) && (0 === n % 1);
};

module.exports = Basket;