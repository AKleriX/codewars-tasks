const factorial = (n) => {
    if (n < 0 || n > 12) throw new RangeError('Error!');
    else return n > 1 ? n * factorial(n - 1) : 1;
  }