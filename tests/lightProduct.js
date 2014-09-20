var assert = require('chai').assert,

	Light = require('../libs/lightProduct');

suite('test Light', function() {
	test('test light has the correct data', function(){
		var light = new Light();
		assert.equal(15, light.getPrice(), 'the light price is not correct');
		assert.equal('year', light.getUnit(), 'the lights unit is incorrect');
	});
});
