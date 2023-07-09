function bitMarch(n) {
  let bits = [...('0'.repeat(8) + '1'.repeat(n)).slice(-8)].map(Number),
    res = [[...bits]];
  while (!bits[0]) {
    bits.push(0);
    bits.shift();
    res.push([...bits]);
  }
  return res;
}
