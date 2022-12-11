function splitTheBill(x) {
  let sum = 0,
    counter = 0,
    newObj = {};
  for (let i in x) {
    counter++;
    sum += x[i];
  }
  for (let i in x) newObj[i] = Math.round((x[i] - sum / counter) * 100) / 100;
  return newObj;
}
