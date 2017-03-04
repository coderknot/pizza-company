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
function Order(name, pizzas, isDelivery) {
  this.name = name;
  this.pizzas = pizzas;
  this.totalCost = 0;
  this.isDelivery = isDelivery;
  this.address = [];
}

Order.prototype.calculateCost = function() {
  for(var i = 0; i < this.pizzas.length; i++) {
    this.totalCost += this.pizzas[i].getCost();
  }
}

Order.prototype.setAddress = function(address) {
  if(this.isDelivery) {
    this.address = address;
  }
}

// Other
function addFields() {
  $("#pizzas").append('<div class="pizza">' +
    '<div class="panel panel-info">' +
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
        '<p>Note: $1.25 charge per topping, after the first topping</p>' +
      '</div>' +
    '</div>' +
  '</div>');
}

function showOrder(order) {
  $("#order-name").text(order.name);

  if(order.isDelivery === true) {
    $("#order-delivery").text("Delivery");

    $("#order-street").text(order.address[0]);
    $("#order-city").text(order.address[1]);
    $("#order-state").text(order.address[2]);
    $("#order-zip-code").text(order.address[3]);

    $("#order-address").show();
  } else {
    $("#order-delivery").text("Pick-Up");
  }

  var pizzasString = "";

  for(var i = 0; i < order.pizzas.length; i++) {
    var size = "";

    if(order.pizzas[i].size === 8) {
      size = '8" Personal';
    } else if (order.pizzas[i].size === 10) {
      size = '10" Small';
    } else if (order.pizzas[i].size === 12) {
      size = '12" Medium';
    } else if (order.pizzas[i].size === 14) {
      size = '14" Large';
    } else if (order.pizzas[i].size === 16) {
      size = '16 Extra-Large';
    }

    var toppingsString = "<ul>";

    for(var j = 0; j < order.pizzas[i].toppings.length; j++) {
      toppingsString += "<li>" + order.pizzas[i].toppings[j] + "</li>";
      console.log(toppingsString);
    }

    toppingsString += "</ul>";

    pizzasString += "<p>Size: " + size + "</p>" +
      "<p>Toppings: </p>" + toppingsString +
      "<p>Cost: $" + order.pizzas[i].cost + "</p>";
  }

  $("#order-pizzas").html(pizzasString);
  $("#order-total-cost").text(order.totalCost);
  $("#order-confirmation").show();
}

// User Interface Logic
$(document).ready(function() {

  $("#add-pizza").click(function() {
    addFields();
  });

  $("#delivery").click(function() {
    $("#address").show();
  });

  $("#pick-up").click(function() {
    $("#address").hide();
  });

  $("form#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();

    var inputtedPizzas = [];

    $(".pizza").each(function(){
      var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
      var inputtedToppings = [];

      $("input:checkbox[name=toppings]:checked").each(function(){
        var topping = $(this).val();
        inputtedToppings.push(topping);
      });

      var newPizza = new Pizza(inputtedSize, inputtedToppings);
      newPizza.calculateCost();
      inputtedPizzas.push(newPizza);
    });

    var inputtedDelivery = false;
    var inputtedAddress = [];
    var inputtedDeliveryOption = $("input:radio[name=delivery]:checked").val();
    if(inputtedDeliveryOption === "delivery") {
      inputtedDelivery = true;

      var inputtedStreet = $("input#street").val();
      var inputtedCity = $("input#city").val();
      var inputtedState = $("input#state").val();
      var inputtedZipCode = $("input#zip-code").val();

      inputtedAddress.push(inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
    }

    var newOrder = new Order(inputtedName, inputtedPizzas, inputtedDelivery);
    newOrder.calculateCost();

    if(inputtedAddress.length > 0) {
      newOrder.setAddress(inputtedAddress);
    }

    showOrder(newOrder);
  });

});
