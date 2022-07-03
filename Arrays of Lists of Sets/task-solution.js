function solve(arr) {
  let currentArr = arr.map((s) => [
      Array.from(new Set([...s]))
        .sort()
        .join(''),
      false,
    ]),
    counter = [];
  for (let i = 0; i < currentArr.length; i++) {
    let idxCounter = i;
    if (!currentArr[i][1])
      for (let j = i + 1; j < currentArr.length; j++)
        if (currentArr[j][0] === currentArr[i][0]) {
          currentArr[j][1] = true;
          idxCounter += j;
        }
    if (idxCounter > i) counter.push(idxCounter);
  }
  return counter.sort((a, b) => a - b);
}
