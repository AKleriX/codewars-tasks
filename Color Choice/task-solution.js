const checkchoose = (m, n) => {
    let x = -1,
        nFac = fac(n);
    for (let i = 1; i <= Math.ceil(n / 2) ; i++)
      if (Math.round(nFac / (fac(i) * fac(n - i))) === m) {
        x = i;
        break;
      }
    return x;
  }
  
  const fac = (n) => n ? n * fac(n - 1) : 1;