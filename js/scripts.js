// business logic
function Order(name,address,phoneNumber) {
  this.pizzas = {};
  this.address = {};
  this.currentId = 0;
}

Order.prototype.addPizzaId = function(pizza, address) {
  pizza.id = this.assignId();
  address.id = pizza.id;
  this.pizzas[pizza.id] = pizza;
  this.address[address.id] = address;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

let pizza = 10;
let address = 10;


let testObj = new Order(pizza,address);
testObj.addPizzaId();
console.log(testObj);
console.log("hi");

