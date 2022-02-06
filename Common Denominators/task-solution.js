function convertFrac(lst){
  let commonDenom = lcm(lst.map(val => val[1]));
  return lst.map(val => `(${commonDenom / val[1] * val[0]},${commonDenom})`).join('');
}


const lcm = (nums) => {
  let maxDenom = Math.max.apply(null, nums),
      commonDenom;
  while (!commonDenom)
    if (nums.every(denom => !(maxDenom % denom))) commonDenom = maxDenom;
    else maxDenom++;
  return commonDenom;
};