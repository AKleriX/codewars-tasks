async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  // Get the current user's shopping cart
  shoppingCart = await OrderAPI.getShoppingCartAsync(user).then(function (cart) {
    return cart;
  });

  // Also look up the ZIP code from their profile
  zipCode = await CustomerAPI.getProfileAsync(user).then(function (profile) {
    return profile.zipCode;
  });

  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);

  // Submit the order
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function (
    success,
  ) {
    return success;
  });

  console.log(`Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`);
}
