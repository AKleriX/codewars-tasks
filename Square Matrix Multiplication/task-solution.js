function matrixMultiplication(a, b){
    let c = Array.from({length: a.length}, () => new Array(a.length).fill(0));
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < a[0].length; j++)
        for (let k = 0; k < a.length; k++)
          c[i][j] += a[i][k] * b[k][j];    
    return c;
  }
  