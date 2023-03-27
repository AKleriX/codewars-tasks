function area(d, l) {
  return d <= l ? 'Not a rectangle' : +(l * Math.sqrt(d ** 2 - l ** 2)).toFixed(2);
}
