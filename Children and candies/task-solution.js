function distributionOfCandy(candies) {
  let currentCan = [...candies],
    counter = 0;
  while (!currentCan.every((n, _, a) => n === a[0])) {
    let tmpCan = [];
    for (let i = 1; i < currentCan.length; i++)
      tmpCan[i] = Math.round(currentCan[i] / 2) + Math.round(currentCan[i - 1] / 2);
    tmpCan[0] = Math.round(currentCan[0] / 2) + Math.round(currentCan[currentCan.length - 1] / 2);
    currentCan = [...tmpCan];
    counter++;
  }
  return [counter, currentCan[0]];
}
