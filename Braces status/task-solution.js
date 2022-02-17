function bracesStatus(string){
  const brPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let openBr = '';
  for (let i = 0; i < string.length; i++){
    if (string[i] === '(' || string[i] === '[' || string[i] === '{')
      openBr += string[i];
    else if (string[i] === ')' || string[i] === ']' || string[i] === '}'){
      if (brPairs[openBr[openBr.length - 1]] === string[i]) openBr = openBr.slice(0, -1);
      else return false;
    }
  }
  return !openBr.length;
}