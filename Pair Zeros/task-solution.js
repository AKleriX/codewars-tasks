function pairZeros(arr) {
    let zeroCounter = 0;
    return arr.filter(num => {
      if (num === 0) zeroCounter++;
      return num !== 0 || zeroCounter % 2;
    });
}