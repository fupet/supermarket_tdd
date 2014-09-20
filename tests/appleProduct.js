var assert = require('chai').assert,

	Apple = require('../libs/appleProduct');

suite('test Apple', function() {
	test('test apple has the correct data', function(){
		var apple = new Apple();
		assert.equal(32, apple.getPrice(), 'the apple price is not correct');
		assert.equal('kg', apple.getUnit(), 'the apples unit is incorrect');
	});
});
