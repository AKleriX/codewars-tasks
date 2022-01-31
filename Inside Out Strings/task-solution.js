function insideOut(x){
  return x.split(' ').map(word => {
    let pathsLen = Math.trunc(word.length / 2),
        centralSymbol = word.length % 2 ? word[pathsLen] : '';
    return word.length < 4 ? word : word.slice(0, pathsLen).split('').reverse().join('') + centralSymbol +
           word.slice(-pathsLen).split('').reverse().join('');
  }).join(' ');
}