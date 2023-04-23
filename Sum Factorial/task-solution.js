function sumFactorial(arr) {
  let sortArr = [...arr].sort((a, b) => a - b),
    prevFact = [1, 1],
    sum = 0;
  const getFact = (n) => {
    if (!prevFact[n]) prevFact[n] = n * getFact(n - 1);
    return prevFact[n];
  };
  for (let i = 0; i < sortArr.length; i++) sum += getFact(sortArr[i]);
  return sum;
}
