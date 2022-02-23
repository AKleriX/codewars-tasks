function numberOfCarries(a, b) {
    let carryCount = 0,
        carry = 0;
    while (a || b){
      carry = Number(a % 10 + b % 10 + carry) / 10 | 0;
      carryCount += carry;
      a = Math.trunc(a / 10);
      b = Math.trunc(b / 10);
    }
    return carryCount;
  }