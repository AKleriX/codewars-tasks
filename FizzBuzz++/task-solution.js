function fizzbuzzPlusPlus(numbers, words) {
  let arr = [];
  for (let i = 1; i <= numbers.reduce((mul, n) => mul * n); i++) {
    let tmp = [];
    for (let j = 0; j < numbers.length; j++) if (!(i % numbers[j])) tmp.push(words[j]);
    arr.push(tmp.length ? tmp.join('') : i);
  }
  return arr;
}
