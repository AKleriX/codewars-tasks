export function solequa(n: number): [number, number][] {
  let res: [number, number][] = [];
  for (let i = 1; i <= Math.sqrt(n); i++){
    if (!(n % i)){
      let j: number = n / i;
      if (!((i + j) % 2) && !((j - i) % 4))
          res.push([(i + j) / 2, (j - i) / 4]);
    }
  }
  return res;
}