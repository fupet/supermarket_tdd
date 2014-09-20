var assert = require('chai').assert,

	sinon = require('sinon');
	Basket = require('../libs/basket');
	Product = require('../libs/product');

suite('test Basket', function() {
	var createProductMock = function(){
		return sinon.mock(Product);
	},
	basket = new Basket();


	test('test if basket empty after init', function(){
		assert.typeOf(basket.products, 'array', 'products array not exists');
		assert.lengthOf(basket.products, 0, 'products array is not empty');
	});

	test('test if we can add product', function() {
		var customProduct = createProductMock();

		basket.addProductWithAmount(customProduct, 10);
		assert.lengthOf(basket.products, 1, 'products array length is not ok');

	});

	suite('test with dataProvider', function(){
		var testProduct = createProductMock(),
			invalidAmountDataProvider = [
				[testProduct, ''],
				[testProduct, true],
				[testProduct, false],
				[testProduct, null],
				[testProduct, -3],
				[testProduct, 5.5],
				[testProduct, []]
			];

		invalidAmountDataProvider.forEach(function(dataItem) {
			test('test with dataProvider', function(){
				try {
					basket.addProductWithAmount(dataItem[0], dataItem[1]);
				}
				catch(e) {
					assert.fail(dataItem[1], 'natural number',  '' + e);
				}
			});
		});
	});
});
