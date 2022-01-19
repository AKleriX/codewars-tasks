function swap (s, n){
    let bits = n.toString(2),
        bitPointer = 0;
    return s.split('').map(symbol => {
      if (/[a-z]/i.test(symbol))
        [symbol, bitPointer] = [bits[bitPointer] === '1' ? caseSwitcher(symbol) : symbol,
                               bitPointer + 1 === bits.length ? 0 : bitPointer + 1];
      return symbol;
    }).join('');
  }
  
  const caseSwitcher = (letter) => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();