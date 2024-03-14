const numberOfHooks = (length, maxHookDist) => {
  let h = 1;
  for (let i = length; i > maxHookDist; i /= 2) h *= 2;
  return ++h;
};
