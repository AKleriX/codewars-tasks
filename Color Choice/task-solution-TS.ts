export function checkchoose(m: number, n: number): number {
  let x = -1,
      iterFac = 1,
      nFac = fac(n);
  for (let i = 1; i <= Math.ceil(n / 2); i++){
    iterFac *= i;
    if (Math.round(nFac / (iterFac * fac(n - i))) === m){
      x = i;
      break;
    }
  }
  return x;
}

const fac = (n: number): number => n ? n * fac(n - 1) : 1;