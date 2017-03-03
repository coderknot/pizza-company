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

Pizza.prototype.getCost = function() {
  return this.cost;
}
//Order
function Order(name, pizzas, delivery) {
  this.name = name;
  this.pizzas = pizzas;
  this.totalCost = 0;
  this.isDelivery = delivery;
  this.address = [];
}

Order.prototype.calculateCost = function() {
  for(var i = 0; i < pizzas.length; i++) {
    this.totalCost += pizzas[i].getCost();
  }
}

Order.prototype.setAddress = function(address) {
  if(this.isDelivery) {
    this.address = address;
  }
}

var pSize = 10;
var pToppings = ["extra cheese","pepperoni"];
var pSize2 = 12;
var pToppings2 = ["ham"];
var pizzas = [];

var newPizza = new Pizza(pSize, pToppings);
newPizza.calculateCost();
pizzas.push(newPizza);

var newPizza2 = new Pizza(pSize2, pToppings2);
newPizza2.calculateCost();
pizzas.push(newPizza2);

var name = "Chris";
var deliveryOption = true;
var street = "401 Frantz Avnenue";
var city = "Mullens";
var state = "WV";
var zip = "25882";
var address = [street, city, state, zip];

var newOrder = new Order(name, pizzas, deliveryOption);

function addFields() {
  $("#pizzas").append('<div class="panel panel-info">' +
    '<div class="panel-heading">' +
      '<h2 class="panel-title">Size</h2>' +
    '</div>' +
    '<div class="panel-body">' +
      '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="size" value="8" checked>' +
          '8"' +
        '</label>' +
      '</div>' +
      '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="size" value="10">' +
          '10"' +
        '</label>' +
      '</div>' +
      '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="size" value="12">' +
          '12"' +
        '</label>' +
      '</div>' +
      '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="size" value="14">' +
          '14"' +
        '</label>' +
      '</div>' +
      '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="size" value="16">' +
          '16"' +
        '</label>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="panel panel-info">' +
    '<div class="panel-heading">' +
      '<h2 class="panel-title">Toppings</h2>' +
    '</div>' +
    '<div class="panel-body">' +
      '<div class="form-group">' +
        '<input type="checkbox" name="toppings" value="extra-cheese">Extra Cheese</input>' +
        '<input type="checkbox" name="toppings" value="pepperoni">Pepperoni</input>' +
        '<input type="checkbox" name="toppings" value="ham">Ham</input>' +
        '<input type="checkbox" name="toppings" value="sausage">Sausage</input>' +
        '<input type="checkbox" name="toppings" value="bacon">Bacon</input>' +
        '<input type="checkbox" name="toppings" value="bell-pepper">Bell Pepper</input>' +
        '<input type="checkbox" name="toppings" value="onion">Onion</input>' +
        '<input type="checkbox" name="toppings" value="mushroom">Mushrooms</input>' +
        '<input type="checkbox" name="toppings" value="green-olive">Green Olive</input>' +
        '<input type="checkbox" name="toppings" value="black-olive">Black Olive</input>' +
        '<input type="checkbox" name="toppings" value="pineapple">Pineapple</input>' +
      '</div>' +
    '</div>' +
  '</div>');
}

// User Interface Logic
$(document).ready(function() {

  $("#add-pizza").click(function() {
    addFields();
  });

});
