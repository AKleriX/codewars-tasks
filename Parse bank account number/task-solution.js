function parseBankAccount(bankAccount) {
  const numsDic = {
      ' _ | ||_|': 0,
      '     |  |': 1,
      ' _  _||_ ': 2,
      ' _  _| _|': 3,
      '   |_|  |': 4,
      ' _ |_  _|': 5,
      ' _ |_ |_|': 6,
      ' _   |  |': 7,
      ' _ |_||_|': 8,
      ' _ |_| _|': 9,
    },
    numsRows = bankAccount.split('\n');
  let resultNum = '';
  for (let i = 0; i < numsRows[0].length; i += 3)
    resultNum +=
      numsDic[
        numsRows[0].slice(i, i + 3) + numsRows[1].slice(i, i + 3) + numsRows[2].slice(i, i + 3)
      ];
  return Number(resultNum);
}
