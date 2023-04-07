function maxProduct(a) {
  let firstBiggest = 0,
    secondBiggest = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i] >= firstBiggest) [firstBiggest, secondBiggest] = [a[i], firstBiggest];
    else if (a[i] > secondBiggest) secondBiggest = a[i];
  return firstBiggest * secondBiggest;
}
