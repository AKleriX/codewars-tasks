function palindrome(num) {
  if (num !== Number(num) || num < 0) return 'Not valid';
  if (num > 10 && isPalindrome(num)) return num;
  let pal = null,
    left = num - 1,
    right = num + 1;
  while (!pal) {
    if (isPalindrome(left) && left > 10) pal = left;
    else if (isPalindrome(right) && right > 10) pal = right;
    left--;
    right++;
  }
  return pal;
}

const isPalindrome = (num) => num.toString() === [...num.toString()].reverse().join('');
