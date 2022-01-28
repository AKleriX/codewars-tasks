const min = (a, b) => {
    if (isNaN(a) || isNaN(b)) return NaN;
    return (a < b) ? Number(a) : Number(b);
  }