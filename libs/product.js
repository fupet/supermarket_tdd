/**
 * Product
 *
 * @param price {number}
 * @param unit {string}
 * @constructor
 */
var Product = function(price, unit) {
	this._price = price;
	this._unit = unit;
};

/**
 * Price getter
 *
 * @returns {number}
 */
Product.prototype.getPrice = function() {
	return this._price;
};

/**
 * Unit getter
 *
 * @returns {string}
 */
Product.prototype.getUnit = function() {
	return this._unit;
};

module.exports = Product;
