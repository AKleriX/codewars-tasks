function getLastDigit(index) {
  let ends = [0, 1],
    counter = 1;
  for (let i = 2; i <= index; i++, counter++) {
    ends.push((ends[i - 1] + ends[i - 2]) % 10);
    if (ends[i] === 1 && ends[i - 1] === 0) break;
  }
  return ends[index % counter];
}
