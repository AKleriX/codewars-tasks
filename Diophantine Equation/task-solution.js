function solequa(n) {
    let res = [];
    for (let i = 1; i <= Math.sqrt(n); i++){
      if (!(n % i)){
        let j = n / i;
        if (!((i + j) % 2) && !((j - i) % 4))
            res.push([(i + j) / 2, (j - i) / 4]);
      }
    }
    return res;
  }