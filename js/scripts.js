// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
  var baseCost = 8;

  this.cost = baseCost;
}

var pSize = 10;
var pToppings = ["extra cheese","pepperoni"];

var newPizza = new Pizza(pSize, pToppings);

console.log(Pizza);

// User Interface Logic
$(document).ready(function() {


});
