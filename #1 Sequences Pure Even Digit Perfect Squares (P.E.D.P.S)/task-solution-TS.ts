export const evenDigitSquares = (a: number, b: number): number[] => {
  let nums: number[] = [];
  for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++)
    if ([...(i ** 2).toString()].every((d) => !(+d % 2))) nums.push(i ** 2);
  return nums;
};
