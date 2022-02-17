function sortByBit(arr) {
    arr.sort((a, b) => {
      let aBits = a.toString(2).replace(/0/g, '').length,
          bBits = b.toString(2).replace(/0/g, '').length;
      return aBits !== bBits ? aBits - bBits : a - b;
    });
    return arr;
  }