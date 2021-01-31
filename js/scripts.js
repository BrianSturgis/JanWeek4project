// business logic for order
function Order() {
  this.pizzas = {};
  
}
// business logic for pizz
function Pizza (size,toppings,drink) {
  this.size = size;
  this.toppings = toppings;
  this.drink = drink;
}




let newOrder = new Order();
let newPizza = new Pizza();
console.log(newOrder);
console.log(newPizza);
