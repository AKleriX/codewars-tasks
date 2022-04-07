function howManyPizzas(n) {
  let areaN = Math.PI * (n / 2) ** 2,
    area8 = Math.PI * 4 ** 2,
    pizzas = Math.floor(areaN / area8),
    overSlice = n ** 2 % 8 ** 2,
    slices = Math.round(overSlice / 8);
  return `pizzas: ${pizzas}, slices: ${slices}`;
}
