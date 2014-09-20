var assert = require('chai').assert,

	Product = require('../libs/product');

suite('test Product', function() {
	this.dataProvider = [
		{
			price: 32,
			unit: 'kg'
		},
		{
			price: 15,
			unit: 'year'
		},
		{
			price: 999.99,
			unit: 'piece'
		}
	];

	var testWithData = function(dataItem) {
		return function() {
			console.log(dataItem);
			var product = new Product(dataItem.price, dataItem.unit);
			assert.strictEqual(product.getPrice(), dataItem.price);
			assert.strictEqual(product.getUnit(), dataItem.unit);
		};
	};

	this.dataProvider.forEach(function(dataItem) {
		test('dataProvider test', testWithData(dataItem));
	});
});
