function nbDig(n, d) {
    let dCounter = 0;
    for (let k = 0; k <= n; k++)
      dCounter += (k**2).toString().split('').reduce((counter, digit) => d.toString() === digit ? ++counter : counter, 0);  
    return dCounter;  
  }