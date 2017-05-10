var Avo = require('../Avo');
const assert = require('assert')

var avosList = [
{Quantity : 1, Price: 3.00},
{Quantity : 2, Price: 7.00},
{Quantity : 3, Price: 10.00},
{Quantity : 5, Price: 14.50},
];

describe('The Avo function', function(){

    it('should Avo properly', function(){
        assert.equal(Avo(avosList), 14.50);
    });
});
