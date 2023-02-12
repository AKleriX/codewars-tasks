function cyclops(n) {
  let bin = n.toString(2);
  return (
    bin.length % 2 === 1 &&
    bin.indexOf('0') === Math.floor(bin.length / 2) &&
    bin.indexOf('0') === bin.lastIndexOf('0')
  );
}
