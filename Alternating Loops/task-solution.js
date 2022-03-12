function combine(...arr) {
  let maxArrLength = Math.max.apply(
      null,
      arr.map((a) => a.length),
    ),
    combineArr = [];
  for (let i = 0; i < maxArrLength; i++)
    for (let j = 0; j < arr.length; j++) if (arr[j][i] !== undefined) combineArr.push(arr[j][i]);
  return combineArr;
}
