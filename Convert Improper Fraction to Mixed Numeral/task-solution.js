const convertToMixedNumeral = (parm) => {
  let [num, den] = parm.split('/').map(Number);
  if (!num) return '';
  if (Math.abs(num) < Math.abs(den)) return parm;
  return !(num % den) ? (num / den).toString() : `${(num / den) | 0} ${Math.abs(num % den)}/${den}`;
};
