const pagesNumberingWithInk = (current, numberOfDigits) => {
  while (current.toString().length <= numberOfDigits) {
    numberOfDigits -= current.toString().length;
    current++;
  }
  return --current;
};
