function shoppingListCost(arr) {
  return +arr
    .reduce((p, good) => {
      let price =
        groceries[good[0]].price * Math.round(good[1] / (groceries[good[0]].bogof ? 2 : 1));
      return p + (price - price * (groceries[good[0]].discount / 100));
    }, 0)
    .toFixed(2);
}
