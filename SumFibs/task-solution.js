function sumFibs(n) {
    let sum = 0,
        f1 = 0, f2 = 1;
    for (let i = 2; i <= n; i++){
      [f1, f2] = [f2, f1 + f2];
      if (!(f2 % 2)) sum += f2;
    }
    return sum;
  }