const pizzaPrice = (diameter, price) =>
  !diameter || !price || typeof diameter !== 'number' || typeof price !== 'number'
    ? 0
    : +(price / ((diameter / 2) ** 2 * Math.PI)).toFixed(2);
