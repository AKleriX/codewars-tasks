function findMissing(arr1, arr2) {
  let sortArr1 = [...arr1].sort((a, b) => a - b),
    sortArr2 = [...arr2].sort((a, b) => a - b),
    missNum = sortArr1[0];
  for (let i = 0; i < sortArr1.length; i++)
    if (sortArr1[i] !== sortArr2[i]) {
      missNum = sortArr1[i];
      break;
    }
  return missNum;
}
