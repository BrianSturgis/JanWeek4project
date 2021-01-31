// business logic for order
function Order() {
  this.pizzas = {};
  
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
}

// business logic for pizz
function Pizza (size,toppings,drink) {
  this.size = size;
  this.toppings = toppings;
  this.drink = drink;
}





let newOrder = new Order();
let newPizza01 = new Pizza(12,14,12);
let newPizza02 = new Pizza(13,14,13);
newOrder.addPizza(newPizza01);
newOrder.addPizza(newPizza02);

console.log(newOrder);
console.log(newPizza01);
console.log(newPizza02);
