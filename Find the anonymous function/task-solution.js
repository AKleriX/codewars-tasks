const FindFunction = function (func, arr) {
  let fIdx = func.findIndex((el) => typeof el === 'function');
  return arr.filter(func[fIdx]);
};
