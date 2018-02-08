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
        prodArr.push(`${item} at $${cart[product][item]}`)
      }
    }
  }
  console.log(`In your cart, you have ${prodArr.join(', ')}.`)
}

function total() {
  var total = cart.reduce( ((acc, itemObj) => {
    var itemName = Object.keys(itemObj)[0];
    return acc + itemObj[itemName]
  }), 0);

  return total;
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
