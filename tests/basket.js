var assert = require('chai').assert,

	sinon = require('sinon');
	Basket = require('../libs/basket');
	Product = require('../libs/product');

suite('test Basket', function() {
	var createProductMock = function(){
		return sinon.mock(Product);
	};

	test('test if basket empty after init', function(){
		var basket = new Basket();
		assert.typeOf(basket.products, 'object', 'basket not exists');
		assert.equal(basket.countProducts(), 0, 'products array is not empty');
	});

	test('test if we can add product', function() {
		var customProduct = createProductMock(),
			basket = new Basket();
		basket.addProductWithAmount(customProduct, 10);
		assert.equal(basket.countProducts(), 1, 'products array length is not ok');
	});

	test('add one product twice', function(){
		var customProduct = createProductMock(),
			basket = new Basket();
		basket.addProductWithAmount(customProduct, 10);
		basket.addProductWithAmount(customProduct, 5);
		assert.equal(basket.countProducts(), 1, 'only one kind of product should be in the basket');
	});

	suite('test amount with invalid data', function(){
		var testProduct = createProductMock(),
			basket = new Basket(),
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
					return;
				}
				assert.fail(false, 'natural number test fail');
			});
		});
	});
});
