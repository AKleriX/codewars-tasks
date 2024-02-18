const infDatabase = (range_, str_, val) => {
  const res = [],
    dict = {
      'equals to': (v) => v === val,
      'higher than': (v) => v > val,
      'lower than': (v) => v < val,
      'higher and equals to': (v) => v >= val,
      'lower and equals to': (v) => v <= val,
    };
  if (!dict[str_]) return 'wrong constraint';
  for (let i in A001055)
    if (+i >= range_[0] && +i <= range_[1] && dict[str_](A001055[i])) res.push(+i);
  return [res.length, res];
};
