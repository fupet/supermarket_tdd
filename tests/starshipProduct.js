var assert = require('chai').assert,

	StarShip = require('../libs/starshipProduct');

suite('test StarShip', function() {
	test('test starship has the correct data', function(){
		var starship = new StarShip();
		assert.equal(999.99, starship.getPrice(), 'the starship price is not correct');
		assert.equal('piece', starship.getUnit(), 'the starship unit is incorrect');
	});
});
