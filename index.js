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
    console.log('Your shopping cart is empty.')
  }

  if (cart.length === 1) {
    console.log(`In your cart, you have lemons at $${cart}.`)
  }
}
''
``

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
