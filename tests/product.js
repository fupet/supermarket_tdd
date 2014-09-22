var assert = require('chai').assert,

	Product = require('../libs/product'),
	Apple = require('../libs/appleProduct'),
	Light = require('../libs/lightProduct'),
	StarShip = require('../libs/starshipProduct');

suite('test Product', function() {
	this.dataProvider = [
		{
			product: new Product(32, 'kg'),
			price: 32,
			unit: 'kg'
		},
		{
			product: new Apple(32, 'kg'),
			price: 32,
			unit: 'kg'
		},
		{
			product: new Light(),
			price: 15,
			unit: 'year'
		},
		{
			product: new StarShip(),
			price: 999.99,
			unit: 'piece'
		}
	];

	var testWithData = function(dataItem) {
		return function() {
			console.log(dataItem);
			var product = dataItem.product;
			assert.strictEqual(product.getPrice(), dataItem.price, 'product price is not correct');
			assert.strictEqual(product.getUnit(), dataItem.unit, 'product unit is not correct');
		};
	};

	this.dataProvider.forEach(function(dataItem, index) {
		test('dataProvider test: ' + index, testWithData(dataItem));
	});
});
