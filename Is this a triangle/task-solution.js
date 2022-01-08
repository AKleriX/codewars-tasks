function isTriangle(a,b,c) {
    let sortSides = [a, b, c].sort((s1, s2) => s1 - s2);
    return sortSides[0] + sortSides[1] > sortSides[2];
  }