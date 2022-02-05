function ipsBetween(start, end){
    let ip1 = start.split('.').map(Number),
        ip2 = end.split('.').map(Number),
        sumDif = 0;
    for (let i = 3; i >= 0; i--)
      sumDif += (ip2[i] - ip1[i]) * 256**(3 - i);  
    return sumDif;
  }