let calc = require('../src/calc')

var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1)
    });
  });
});

describe('calc', function() {

  describe('add', function() {
    it('should return the sum of two integers', function() {
      assert.equal(calc.add(4, 8), 12)
    });
  });

  describe('square', function() {
    it('should return the square of an integer', function() {
      assert.equal(calc.square(5), 25)
    });
  });
});
