function sumGroups(arr) {
  let currentArr = [...arr],
    lastLength = 0;
  do {
    lastLength = currentArr.length;
    let newArr = [],
      odd = currentArr[0] % 2,
      sum = currentArr[0];
    for (let i = 1; i < currentArr.length; i++) {
      if ((currentArr[i] % 2 && odd) || (!(currentArr[i] % 2) && !odd)) sum += currentArr[i];
      else {
        newArr.push(sum);
        sum = currentArr[i];
        odd = !odd;
      }
    }
    newArr.push(sum);
    currentArr = newArr;
  } while (lastLength !== currentArr.length);
  return lastLength;
}
