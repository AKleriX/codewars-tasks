function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (!(i % 3)) str += 'Fizz';
    if (!(i % 5)) str += 'Buzz';
    arr.push(str.length ? str : i);
  }
  return arr;
}
