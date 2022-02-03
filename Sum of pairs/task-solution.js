function sumPairs(ints, s) {
    let lastNums = {};
    for (let i = 0; i < ints.length; i++)
      if (lastNums.hasOwnProperty(s - ints[i])) return [s - ints[i], ints[i]];
      else lastNums[ints[i]] = 1;
  }