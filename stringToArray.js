var avoDeal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50"

module.exports = function(name){
    var dealArray = avoDeal.split(",");
    return dealArray;
    console.log(dealArray);
}
