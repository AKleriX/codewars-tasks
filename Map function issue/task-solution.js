const func = (item) => !(item % 2);

const map = (arr, somefunction) => {
  if (typeof somefunction !== 'function') return 'given argument is not a function';
  if (!arr.every((n) => typeof n === 'number' || (typeof n === 'string' && /^\d+$/.test(n))))
    return 'array should contain only numbers';
  return arr.map(somefunction);
};
