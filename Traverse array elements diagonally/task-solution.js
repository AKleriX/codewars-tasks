function diagonal(arr) {
  let resArr = [];
  while (arr.length) {
    let maxLen = Math.max.apply(
        null,
        arr.map((a) => a.length),
      ),
      idx = arr.reduce((acc, a, i) => (a.length === maxLen ? i : acc), -1);
    for (let j = idx; j < arr.length; j++) resArr.push(arr[j].pop());
    if (!arr[arr.length - 1].length) arr.pop();
  }
  return resArr;
}
