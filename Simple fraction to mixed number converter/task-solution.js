function mixedFraction(s){
    let div = s.split('/').map(Number),
        a, sign = '';
    if (div[1] === 0) throw 'ZeroDivisionError';
    if (!(div[0] % div[1])) return (div[0] / div[1]).toString();
    if (div[0] * div[1] < 0) sign = '-';
    div = div.map(Math.abs);
    a = Math.trunc(div[0] / div[1]);  
    div[0] = div[0] % div[1];
    for (let i = div[0]; i > 1; i--)
      if (!(div[0] % i) && !(div[1] % i))
        [div[0], div[1]] = [div[0] / i, div[1] / i];
    return `${sign}${a ? a + ' ' : ''}${div[0]}/${div[1]}`;
  }