function sortArray(array) {
  let sortArr = [...array];
  for (let i = 0; i < sortArr.length; i++)
    for (let j = i + 1; j < sortArr.length; j++){
      if (!(sortArr[i] % 2) && !(sortArr[j] % 2))
        if (sortArr[i] < sortArr[j]) [sortArr[i], sortArr[j]] = [sortArr[j], sortArr[i]];
      if ((sortArr[i] % 2) && (sortArr[j] % 2))
        if (sortArr[i] > sortArr[j]) [sortArr[i], sortArr[j]] = [sortArr[j], sortArr[i]];
    }  
  return sortArr;
}