function selNumber(n, d) {
  let counter = 0;
  for (let i = 12; i <= n; i++) {
    let str = i.toString(),
      correct = true;
    for (let j = 1; j < str.length; j++)
      if (+str[j] - +str[j - 1] > d || +str[j] <= +str[j - 1]) correct = false;
    if (correct) counter++;
  }
  return counter;
}
