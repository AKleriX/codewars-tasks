export const convertFrac = (lst: [number, number][]): string => {
  let currentlst = lst.map(val => {
    for (let i = 2; i <= val[0]; i++)
      if (!(val[0] % i) && !(val[1] % i)) return [val[0] / i, val[1] / i];
    return val;
  }),
      commonDenom: number = lcm(currentlst.map(val => val[1]));
  return currentlst.map(val => `(${commonDenom / val[1] * val[0]},${commonDenom})`).join('');
}


const lcm = (nums: number[]): number => {
  let maxDenom: number = Math.max.apply(null, nums),
      commonDenom;
  while (!commonDenom)
    if (nums.every(denom => !(maxDenom % denom))) commonDenom = maxDenom;
    else maxDenom++;
  return commonDenom;
};