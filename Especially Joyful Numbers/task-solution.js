function numberJoy(n) {
  let sum = [...n.toString()].reduce((s, d) => +s + +d),
    revSum = +[...sum.toString()].reverse().join('');
  return !(n % sum) && sum * revSum === n;
}
