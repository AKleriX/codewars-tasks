function divisibleByThree(str) {
  let sum = [...str].reduce((s, d) => s + +d, 0);
  return sum / 3 === Math.floor(sum / 3);
}
