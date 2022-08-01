function add(a,b){
  let firstNum = [...('0'.repeat(Math.max(a.length, b.length) - a.length) + a)].reverse(),
      secondNum = [...('0'.repeat(Math.max(a.length, b.length) - b.length) + b)].reverse(),
      dec = '0',
      res = [];
  for (let i = 0; i < firstNum.length; i++){
    if ((dec === '1' && firstNum[i] === '1' && secondNum[i] === '1') ||
       ([dec, firstNum[i], secondNum[i]].sort().join('') === '001')){
      dec = !(dec === '1' && firstNum[i] === '1' && secondNum[i] === '1') ? '0' : '1';
      res.push('1');
    }
    else {
      res.push('0');
      dec = firstNum[i] === '1' || secondNum[i] === '1' ? '1' : '0';
    }
  }
  if (dec === '1') res.push('1');
  return res.every(d => d === '0') ? '0' : [...res].slice(0, res.lastIndexOf('1') + 1).reverse().join('');
}