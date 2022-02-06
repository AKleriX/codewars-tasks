const isPP = function(n){
    for (let i = 2; i**2 <= n; i++){
      let k = 2;
      while (i**k < n)
        k++;
      if (i**k === n) return [i, k];
    }
    return null; 
  }