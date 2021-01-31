// business logic
function Order(name,address,phoneNumber,zip,price,grat) {
  this.name = name;
  this.address = address;
  this.phoneNumber = phoneNumber;
  this.zip = zip;
  this.price = price;
  this.grat = grat;
}

Order.prototype.totalPrice = function() {
  let total = this.price + price;
  return total;
}

Order.prototype.autoGrat = function() {
  let grat = this.grat * 18;
  return grat;
}





let name = "brian"
let address = "1510 nw towle"
let phoneNumber = "503-421-9003"
let zip ="97209"
let toppings = 35;
let grat = 0;
let orderOne = new Order(name,address,phoneNumber,zip,price,grat);
// orderOne.totalPrice();
orderOne.autoGrat();
console.log(orderOne);

//ui logic