function sumNoDuplicates(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++)
    if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])) sum += numList[i];
  return sum;
}
