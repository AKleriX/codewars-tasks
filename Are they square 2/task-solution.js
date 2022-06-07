const isSquare = function (arr) {
  if (!arr.length) return undefined;
  for (let i = 0; i < arr.length; i++) {
    if (
      (!Array.isArray(arr[i]) && Math.sqrt(arr[i]) % 1) ||
      (Array.isArray(arr[i]) && isSquare(arr[i]) === false)
    )
      return false;
  }
  return true;
};
