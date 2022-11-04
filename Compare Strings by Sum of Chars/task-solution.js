function compare(s1, s2) {
  let sumFirst = s1 && s1.length ? [...s1].reduce(getSumOfStr, 1) : 0,
    sumSecond = s2 && s2.length ? [...s2].reduce(getSumOfStr, 1) : 0;
  return sumFirst === sumSecond;
}

const getSumOfStr = (sum, symbol) =>
  /[a-z]/i.test(symbol) && sum ? sum + symbol.toUpperCase().charCodeAt(0) : 0;
