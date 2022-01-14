function changer(str) { 
    return str.split('').map(symbol => {
      if (/[a-z]/i.test(symbol))
        return getSwitchCase(getNextAbcLetter(symbol));
      return symbol;
    }).join('');  
  }
                             
  const getSwitchCase = (letter) => /[aoiue]/i.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
  
  
  const getNextAbcLetter = (letter) => {
    return letter === letter.toLowerCase() ? String.fromCharCode((letter.charCodeAt() - 97 + 1) % 26 + 97) : 
                                             String.fromCharCode((letter.charCodeAt() - 65 + 1) % 26 + 65); 
  }