// business logic for order
function Order() {
  this.pizzas = {};
  this.address = [];
  
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

function Address (name,address,phoneNumber) {
  this.name = name;
  this.address = address;
  this.phoneNumber = phoneNumber;
}





let newOrder = new Order();
let newPizza01 = new Pizza(12,14,12);
let newPizza02 = new Pizza(13,14,13);
let address = new Address();
newOrder.addPizza(newPizza01);
newOrder.addPizza(newPizza02);
console.log(address);
console.log(newOrder);
console.log(newPizza01);
console.log(newPizza02);
