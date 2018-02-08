var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*50);
 cart.push(new Object({[item]:price}))
 console.log(item + " has been added to your cart.");
 return cart
}

function viewCart() {
  var cart = [];
  if (cart.length<1){
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i]) {
        cart.push(`${item} at $${cart[i][item]}`)
      }
    }
  }
  console.log(`In your cart, you have ${cart.join(', ')}.`)
}

function total() {
  var total = cart.reduce( ((acc, itemObj) => {
    var itemName = Object.keys(itemObj)[0];
    return acc + itemObj[itemName]
  }), 0);

  return total;
}

function removeFromCart(item) {
  if (key === undefined){
   cart = [];
 } else {
   var remove = cart.filter(function(elem){
     return !(key in elem);
   })
   if (remove.length===cart.length){
     console.log("That item is not in your cart.")
   } else {
     cart = remove;
     return cart;
   }
 }
}

function placeOrder(cardNumber) {

}
