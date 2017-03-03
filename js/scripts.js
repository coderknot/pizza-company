// Business Logic

// Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
  var baseCost = 8;
  this.cost = baseCost + this.getSizeCost() + this.getToppingsCost();
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

Pizza.prototype.getToppingsCost = function() {
  if(this.toppings.length === 1) {
    return 0;
  } else {
    return this.toppings.length * 1.25;
  }
}

//Order
function Order(pizzas) {
  this.pizzas = pizzas;
  this.cost = 0;
}

Order.prototype.calculateCost = function() {
  this.cost = this.pizza.cost;
}

var pSize = 10;
var pToppings = ["extra cheese","pepperoni"];
var pizzas = [];

var newPizza = new Pizza(pSize, pToppings);
newPizza.calculateCost();
pizzas.push(newPizza);

var newOrder = new Order(pizzas);

// User Interface Logic
$(document).ready(function() {


});
