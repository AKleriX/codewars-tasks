function palindrome(num) {
  if (num !== parseInt(num) || num < 0) return 'Not valid';
  let strNum = num.toString();
  for (let i = 0; i < strNum.length - 1; i++)
    if (strNum[i] === strNum[i + 1] || (strNum[i + 2] && strNum[i + 2] === strNum[i])) return true;
  return false;
}
