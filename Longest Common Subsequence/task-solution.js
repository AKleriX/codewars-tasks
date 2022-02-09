function LCS(x, y) {
  const lenX = x.length,
        lenY = y.length;
  let lcs = Array.from({length: lenX + 1}, () => new Array(lenY + 1).fill(''));  
  for (let i = 1; i < lenX + 1; i++)
    for (let j = 1; j < lenY + 1; j++){
      if (x[i - 1] === y[j - 1]){
        lcs[i][j] = lcs[i - 1][j - 1] + x[i - 1];
      }
      else lcs[i][j] = lcs[i - 1][j].length > lcs[i][j - 1].length ? lcs[i - 1][j] : lcs[i][j - 1];      
    } 
  return lcs[lcs.length - 1][lcs[0].length - 1];
}