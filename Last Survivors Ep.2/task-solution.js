function lastSurvivors(str) {
    let currentStr = str.split(''),
        lastStr = [];
    while (currentStr.length !== lastStr.length){    
      lastStr = [...currentStr];
      currentStr = currentStr.sort().join('').replace(/(.)\1{1}/g, match => getNextLetter(match[0])).split('');
    }
    return currentStr.join('');
  }
  
  const getNextLetter = (letter) => letter.charCodeAt() > 121 ? 'a' : String.fromCharCode(letter.charCodeAt() + 1);