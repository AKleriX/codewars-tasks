function balance(arr1, arr2) {
  let arr1Symbols = [...new Set(arr1)],
    arr2Symbols = [...new Set(arr2)],
    arr1Counter = [],
    arr2Counter = [];
  arr1Counter = getCounterSymbols(arr1, arr1Symbols);
  arr2Counter = getCounterSymbols(arr2, arr2Symbols);
  return arr1Counter.sort().join(' ') === arr2Counter.sort().join(' ');
}

const getCounterSymbols = (arr, arrSymbols) => {
  let arrCounter = [];
  for (let i = 0; i < arrSymbols.length; i++)
    arrCounter.push(arr.filter((s) => s === arrSymbols[i]).length);
  return arrCounter;
};
