const solution = function(firstArray, secondArray) {
    return firstArray.reduce((sum, n, i) => sum + (n - secondArray[i])**2 , 0) / firstArray.length;
  }