// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
  var baseCost = 8;

  this.cost = baseCost + this.getSizeCost();
}

Pizza.prototype.getSizeCost = function() {
  if(this.size === 8) {
    return 0;
  } else if(this.size === 10) {
    return 2;
  } else if(this.size === 12) {
    return 4;
  } else if(this.size === 14) {
    return 6;
  } else if(this.size === 16) {
    return 8;
  }
}

var pSize = 10;
var pToppings = ["extra cheese","pepperoni"];

var newPizza = new Pizza(pSize, pToppings);

console.log(Pizza);

// User Interface Logic
$(document).ready(function() {


});
