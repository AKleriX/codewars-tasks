function whitespaceNumber(n) {
  let sign = n >= 0 ? ' ' : '\t',
      binNum = Math.abs(n).toString(2),
      wsNum = '';
  for (let i = 0; i < binNum.length; i++)
    wsNum += binNum[i] === '1' ? '\t' : ' ';
  return (n === 0 ? '' : sign) + wsNum + '\n';
}