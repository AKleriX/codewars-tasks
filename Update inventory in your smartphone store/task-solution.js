function updateInventory(curStock, newStock) {
  let stock = {};
  for (let i = 0; i < curStock.length; i++) stock[curStock[i][1]] = curStock[i][0];
  for (let i = 0; i < newStock.length; i++)
    stock[newStock[i][1]] =
      stock[newStock[i][1]] !== undefined ? stock[newStock[i][1]] + newStock[i][0] : newStock[i][0];
  return Object.keys(stock)
    .sort()
    .map((n) => [stock[n], n]);
}
