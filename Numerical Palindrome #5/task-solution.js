function palindrome(num) {
  if (parseInt(num) !== num || num < 0) return 'Not valid';
  let strNum = num.toString(),
    digitCounter = {},
    oddCounter = 0;
  for (let i = 0; i < strNum.length; i++)
    digitCounter[strNum[i]] = digitCounter[strNum[i]] ? digitCounter[strNum[i]] + 1 : 1;
  for (let digit in digitCounter) if (digitCounter[digit] % 2) oddCounter++;
  return oddCounter < 2 && strNum.length > 1;
}
