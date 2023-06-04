function sortTransform(a) {
  let incArr = [...a].sort((a, b) => a - b),
    alphArr = [...a].map((n) => String.fromCharCode(n)).sort();
  return `${String.fromCharCode(
    a[0],
    a[1],
    a[a.length - 2],
    a[a.length - 1],
  )}-${String.fromCharCode(
    incArr[0],
    incArr[1],
    incArr[a.length - 2],
    incArr[a.length - 1],
  )}-${String.fromCharCode(incArr[a.length - 1], incArr[a.length - 2], incArr[1], incArr[0])}-${
    alphArr[0] + alphArr[1] + alphArr[a.length - 2] + alphArr[a.length - 1]
  }`;
}
