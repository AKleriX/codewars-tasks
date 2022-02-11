function going(n) {
    let res = 1,
        acc = 1;
    for (let i = n; i > 1; i--){
      acc /= i;
      res += acc;
    }
    return Number(res.toString().substring(0, 8));
  }