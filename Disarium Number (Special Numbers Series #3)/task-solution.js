function disariumNumber(n) {
  return (
    (n === +[...n.toString()].reduce((s, d, i) => +s + (+d) ** (i + 1)) ? 'Disarium' : 'Not') +
    ' !!'
  );
}
