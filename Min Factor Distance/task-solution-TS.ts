export function minDistance(n: number): number {
  let minDist: number = n,
    lastDiv: number = 1;
  for (let i = 2; i <= n / 2; i++) {
    if (!(n % i)) {
      if (i - lastDiv < minDist) minDist = i - lastDiv;
      lastDiv = i;
    }
  }
  if (n - lastDiv < minDist) minDist = n - lastDiv;
  return minDist;
}
