function evenOrOdd(str) {
  let evenSum = 0,
    oddSum = 0;
  for (let i = 0; i < str.length; i++)
    if (+str[i] % 2) oddSum += +str[i];
    else evenSum += +str[i];
  return evenSum === oddSum
    ? 'Even and Odd are the same'
    : evenSum > oddSum
    ? 'Even is greater than Odd'
    : 'Odd is greater than Even';
}
