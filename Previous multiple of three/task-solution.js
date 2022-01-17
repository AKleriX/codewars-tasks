const prevMultOfThree = n => {
    let cutN = n;
    while (cutN % 3 && cutN > 0)
      cutN = Math.trunc(cutN / 10);
    return cutN ? cutN : null;
  }