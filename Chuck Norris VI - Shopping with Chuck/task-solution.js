const price = (start, soil, age) => {
  const dict = {
    'Barely used': 1.1,
    'Seen a few high kicks': 1.25,
    'Blood stained': 1.3,
    'Heavily soiled': 1.5,
  };
  let p = start;
  if (
    typeof start !== 'number' ||
    typeof soil !== 'string' ||
    typeof age !== 'number' ||
    !dict.hasOwnProperty(soil)
  )
    return 'Chuck is bottomless!';
  for (let i = 1; i <= age; i++) p *= dict[soil];
  return `$${p.toFixed(2)}`;
};
