// first solution
function choose(n,k){
    let num = 1,
        den = fact(k);
    if (k > n) return 0;
    for (let i = n; i > n - k; i--)
      num = Math.round(num * i);
    return Math.round(num / den);
  }
  
  const fact = (n) => n > 1 ? Math.round(n * fact(n - 1)) : 1;

  // better solution
  function choose(n,k){
    return k ? Math.round(n / k * choose(n - 1, k - 1)) : 1;
  }