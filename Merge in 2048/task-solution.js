function merge(line) {
  let arr = new Array(line.length).fill(0);
  for (let i = 0, j = 0, m = 0; i < line.length; i++) {
    if (m < 0 && line[i] === arr[j - 1]) {
      m = j - 1;
      arr[m] *= 2;
    } else if (line[i] > 0) {
      arr[j++] = line[i];
      m -= 2048 - arr[j];
    }
  }
  return arr;
}
