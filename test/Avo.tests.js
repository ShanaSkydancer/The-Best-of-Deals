var Avo = require('../Avo');
const assert = require('assert')

var avosList = [
{quantity : 1, price: 3.00},
{quantity : 2, price: 7.00},
{quantity : 3, price: 10.00},
{quantity : 5, price: 14.50}
];

var avoDeals = [
  {deal, price: 3.00},
  {deal, price: 3.50},
  {deal, price: 3.33},
  {deal, price: 2.90}
]

var expectedResults = [
  {deal, price: 2.90}
]

describe('The find cheapest Avo function', function(){

    it('should Avo properly', function(){
        assert.deepEqual(Avo(avoDeals), expectedResults);
    });
});
