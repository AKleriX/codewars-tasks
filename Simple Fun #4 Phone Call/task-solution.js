function phoneCall(min1, min2_10, min11, s) {
  let length = 0,
    cost = 0;
  while (cost + (length < 1 ? min1 : length < 10 ? min2_10 : min11) <= s) {
    cost += length < 1 ? min1 : length < 10 ? min2_10 : min11;
    length++;
  }
  return length;
}
