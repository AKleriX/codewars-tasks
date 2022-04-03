function palindrome(num) {
  if (parseInt(num) !== num || num < 0) return 'Not valid';
  let strNum = num.toString(),
    palCounter = 0;
  for (let i = 0; i < strNum.length - 1; i++)
    for (let j = i + 1; j < strNum.length; j++)
      if (strNum.slice(i, j + 1) === [...strNum.slice(i, j + 1)].reverse().join('')) palCounter++;
  return palCounter;
}
