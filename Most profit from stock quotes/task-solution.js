function getMostProfitFromStockQuotes(quotes) {
  let currentArr = [...quotes],
    sum = 0;
  while (currentArr.length) {
    let maxIndex = currentArr.indexOf(Math.max.apply(null, currentArr)),
      localSum = 0;
    for (let i = 0; i < maxIndex; i++) localSum += currentArr[i];
    sum += currentArr[maxIndex] * maxIndex - localSum;
    currentArr = currentArr.slice(maxIndex + 1);
  }
  return sum;
}
