function gifts(number) {
  let giftsList = [];
  while (number > 0) {
    let currentNum = number;
    while (!GIFTS.hasOwnProperty(currentNum)) currentNum--;
    giftsList.push(GIFTS[currentNum]);
    number -= currentNum;
  }
  return giftsList.sort();
}
