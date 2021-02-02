// business logic for order
function Order() {
  this.pizzas = {};
  this.address = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
}

Order.prototype.addAddress = function(address) {
  this.address[address.size] = address;
}

function Pizza (size,toppings,cheese) {
  this.size = size;
  this.toppings = toppings;
  this.cheese = cheese;
  this.totalPrice = 0;
}

Pizza.prototype.totalCost = function(){
  let price = this.size + this.toppings + this.cheese;
  this.totalPrice = price;
}

function Address (name,address,phoneNumber) {
  this.name = name;
  this.address = address;
  this.phoneNumber = phoneNumber; 
}




let newOrder = new Order();
let address = new Address("brian", "15010 nw towle terrace", 666-4001);
let newPizza01 = new Pizza(12,14,12);
let newPizza02 = new Pizza(13,14,13);
newPizza01.totalCost();
newPizza02.totalCost();
newOrder.addPizza(newPizza01);
newOrder.addPizza(newPizza02);
newOrder.addAddress(address);
console.log(address);
console.log(newOrder);
console.log(newPizza01);
console.log(newPizza02);



// let address = new Address ();
// console.log(address);
// console.log(toppings);
// let inputtedSize = $();
// let inputtedToppings =$();
// let inputtedDrink =$();
// let inputtedTotalPrice =$();
// let inputtedName =$();
// let inputtedAddress =$();
// let inputtedPhoneNumber =$();
// console.log(inputtedSize);
// $();
// $();