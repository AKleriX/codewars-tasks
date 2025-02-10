const reverseOddCount = (array) => {
  const count = array.reduce((acc, el) => {
      acc.set(el, (acc.get(el) || 0) + 1);
      return acc;
    }, new Map()),
    oddElements = array.filter((el) => count.get(el) % 2 !== 0).reverse();
  let index = 0;

  return array.map((el) => (count.get(el) % 2 !== 0 ? oddElements[index++] : el));
};
