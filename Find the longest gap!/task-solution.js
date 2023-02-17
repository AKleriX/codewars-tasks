const gap = (num) =>
  Math.max.apply(
    Math,
    (num.toString(2).match(/0+(?=1)/g) || ['']).map((g) => g.length),
  );
