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

module.exports = function(avos){
  var avoArray = ["1 for R3, 2 for R7, 3 for R10, 5 for R14.50"];
  var avoSplit = avoArray.split(",");
  console.log(avoSplit);
  var avoSecSplit = avoSplit.spilt(" for ");
  console.log(avoSecSplit);
  var lowestPrice = 0;

    for (var i = 0; i < avoList.length; i++) {
      var currentAvo = avoDeals[i];
      var currentDeal = avoDeals.deals[i];
      var avoPrice = Number(price.toFixed(2));
    }
      if (avoPrice > lowestPrice) {
        avoPrice = lowestPrice;
      }
    return avoPrice;
}
