function palindrome(num) {
  if (num < 0 || parseInt(num) !== num) return 'Not valid';
  let pals = new Set(),
    strNum = num.toString();
  for (let i = 0; i < strNum.length; i++)
    for (let j = i + 1; j < strNum.length; j++) {
      let currentNum = Number(strNum.slice(i, j + 1));
      if (
        currentNum > 10 &&
        currentNum.toString() === [...currentNum.toString()].reverse().join('')
      )
        pals.add(currentNum);
    }
  return pals.size > 0 ? Array.from(pals).sort((a, b) => a - b) : 'No palindromes found';
}
