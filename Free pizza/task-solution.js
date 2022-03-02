function pizzaRewards(customers, minOrders, minPrice) {
  let awarded = [];
  for (let name in customers)
    if (customers[name].filter((p) => p >= minPrice).length >= minOrders) awarded.push(name);
  return awarded;
}
