function sc(apple, n) {
  let newArr = [...apple];
  for (let i = 1; i <= n; i++) {
    let currentArr = [...newArr.map((a) => [...a])];
    for (let j = 0; j < newArr.length; j++)
      for (let k = 0; k < newArr[j].length; k++) {
        if (newArr[j][k] === 'V') {
          if (currentArr[j - 1] && currentArr[j - 1][k]) currentArr[j - 1][k] = 'V';
          if (currentArr[j + 1] && currentArr[j + 1][k]) currentArr[j + 1][k] = 'V';
          if (currentArr[j][k - 1]) currentArr[j][k - 1] = 'V';
          if (currentArr[j][k + 1]) currentArr[j][k + 1] = 'V';
        }
      }
    newArr = [...currentArr];
  }
  return newArr;
}
