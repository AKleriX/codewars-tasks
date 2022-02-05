const lastDigit = function(str1, str2){  
  let lastDigits  = [],
      d = str1[str1.length - 1];
  while (!lastDigits.includes(d)){
    lastDigits.push(d);
    d = (Number(d) * Number(str1[str1.length - 1])).toString().slice(-1);
  }
  lastDigits = lastDigits.slice(-1).concat(lastDigits.slice(0, lastDigits.length - 1));
  if (str2 === '0') return 1;
  if (lastDigits.length === 4 )
    return Number(lastDigits[Number(str2.slice(-2)) % 4]);
  return Number(lastDigits[Number(str2.slice(-1)) % lastDigits.length]);
 }