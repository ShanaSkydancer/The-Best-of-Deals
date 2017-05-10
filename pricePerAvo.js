var avoDeal = ['1 for R3.00', '2 for R7.00', '3 for R10.00', '5 for R14.50']

module.exports = function(name){
 var priceList = [];
 var avoList = avoDeal.split("for");
 avoList.trim("");
 avoList.replace("R");
 console.log(avoList);

 for (var i = 0; i < priceList.length; i++) {
   current = priceList[i];
   current[0] / current[1];
   var price = Number()
   priceList.push({
     quantity: priceList[0],
     price: priceList[1]
   })
 }

}
