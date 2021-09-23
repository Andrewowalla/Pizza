//Businmess logic
function getPizza (flavor, size, crust, topping, quantity, totalAmount) {
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.quantity = quantity;
  this.totalAmount = totalAmount;
  
}
//User interface logic
function getFlavor() {
    var flavor = document.getElementById("flavor").value;
    return parseInt(flavor);
  }
function getSize() {
    var size = document.getElementById("size").value;
    return parseInt(size);
  }
  
  function getCrust() {
    var crust = document.getElementById("crust").value;
    return parseInt(crust);
  }
  
  function getTopping() {
    var topping = document.getElementById("topping").value;
    return parseInt(topping);
  }
  function getQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
  }

  function totalAmount() {
    var totals = (getFlavor() + getSize() + getCrust() + getTopping())* getQuantity();
    alert(
      "You have Ordered " +
      getQuantity("") +
      " pizza," + 
      "" +
      " amounting to ksh. " +
      totals +
      "" +
      " Thanks for your order, hope you will enjoy it, welcome again."
    );
  
    var location = prompt("For delivery enter your location and if not cancel.");
    if (location !== "") {
      alert("You order will be delivered shortly.Delivery fee is 150/= and incase you didn't want it delivered please come pick your order.");
    }
  }