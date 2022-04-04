function sumNestedNumbers(arr, pow = 1) {
  return arr.reduce((sum, obj) => {
    if (Array.isArray(obj)) return sum + sumNestedNumbers(obj, pow + 1);
    return sum + obj ** pow;
  }, 0);
}
