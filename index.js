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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var newCart = [];
    for (i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])
    newCart.push(`${itemName} at $${cart[i][itemName]}`)
    }
    console.log(`In your cart, you have ${newCart.join(", ")}.`)
  }
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
