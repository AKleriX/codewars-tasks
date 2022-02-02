const validParentheses = (parens) => {
    let openBrCounter = 0;
    for (let i = 0; i < parens.length; i++)
      if (parens[i] === '(') openBrCounter++;
      else if (openBrCounter > 0) openBrCounter--;
      else return false;
    return openBrCounter === 0;
  };