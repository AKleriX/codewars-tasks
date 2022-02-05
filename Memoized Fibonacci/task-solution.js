const fibonacci = function(n) {
    let cashe = [];
    const fib = (n) => {
      if(n==0 || n == 1)
          return cashe[n] ? cashe[n] : (cashe[n] = n, cashe[n]);
      return (cashe[n - 1] ? cashe[n - 1] : (cashe[n - 1] = fib(n - 1), cashe[n - 1])) + 
             (cashe[n - 2] ? cashe[n - 2] : (cashe[n - 2] = fib(n - 2), cashe[n - 2]));
    }
    return fib(n);
  }