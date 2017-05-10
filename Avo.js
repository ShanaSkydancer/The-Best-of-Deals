var avosList = [
{Quantity : 1, Price: 3.00},
{Quantity : 2, Price: 7.00},
{Quantity : 3, Price: 10.00},
{Quantity : 5, Price: 14.50},
];

module.exports = function(avos){
  var avoInput = {};
  var mostQuanity = 0;
  var mostPrice = 0;

  	for(var i = 0; i < avos.length; i++){
      	var currentAvo = avos[i]
      	var currenQuantity = current.Quantity;
      	var currentPrice = current.Price;

        // for(current in avoInput){
        //   var currentQuanity = current;
        //   var currentPrice = avoInput[currentQuanity];

          if(mostPrice < currentPrice){
                mostPrice = currentPrice;
                mostQuanity = currentQuanity;
            }
      // }
  }
  return mostPrice;
}
