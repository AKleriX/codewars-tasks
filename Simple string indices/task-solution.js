function solve(str,idx){
    if (!/\(/.test(str[idx])) return -1;
    let bracketsCounter = 0,
        indexCloseBracket = idx;
    for (let i = idx + 1; i < str.length; i++){
      if (str[i] === '(') bracketsCounter++;
      else if (str[i] === ')') 
        if (!bracketsCounter) {
          indexCloseBracket = i;
          break;
        }
        else bracketsCounter--;
    }
    return indexCloseBracket;
  }