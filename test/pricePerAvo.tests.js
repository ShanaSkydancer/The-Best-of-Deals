var stringToArray = require('../pricePerAvo');
const assert = require('assert');

var expectedResults = [
  {quantity : 1, price : 3.00},
  {quantity : 2, price : 3.50},
  {quantity : 3, price : 3.33},
  {quantity : 5, price : 2.90},
];

describe('The stringToArray function', function(){
    it('should convert the string to and array correctly', function(){
        assert.equal("['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']", stringToArray(expectedResults));
    });
});
