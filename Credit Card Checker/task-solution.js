const validCard = (card) =>
  !(
    [...card.replace(/\s/g, '')]
      .reverse()
      .map((d, i) => (i % 2 ? [...(+d * 2).toString()].reduce(getSum, 0) : +d))
      .reduce(getSum, 0) % 10
  );

const getSum = (s, n) => s + +n;
