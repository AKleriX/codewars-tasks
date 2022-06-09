function solve(arr, n) {
  let dogsCats = [...arr],
    counter = 0;
  for (let i = 0; i < dogsCats.length; i++) {
    if (dogsCats[i] === 'D')
      for (let j = i - n; j <= i + n; j++)
        if (dogsCats[j] === 'C') {
          counter++;
          dogsCats[j] = 0;
          break;
        }
  }
  return counter;
}
