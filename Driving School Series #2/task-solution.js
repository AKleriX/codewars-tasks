function cost(mins) {
  let price = 30;
  mins -= 60;
  while (mins > 5) {
    mins -= 30;
    price += 10;
  }
  return price;
}
