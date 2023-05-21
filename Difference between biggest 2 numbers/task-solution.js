const diffBig2 = (arr) => {
  let theBiggest = 0,
    theBiggest2 = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > theBiggest) {
      theBiggest2 = theBiggest;
      theBiggest = arr[i];
    } else if (arr[i] > theBiggest2) theBiggest2 = arr[i];
  return theBiggest - theBiggest2;
};
