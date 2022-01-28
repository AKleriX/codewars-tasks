function arraysSimilar(arr1, arr2) {
    let [sortArr1, sortArr2] = [[...arr1].sort(), [...arr2].sort()];
    for (let i = 0; i < sortArr1.length; i++)
      if (sortArr1[i] !== sortArr2[i]) return false;
    return arr1.length === arr2.length;
  }