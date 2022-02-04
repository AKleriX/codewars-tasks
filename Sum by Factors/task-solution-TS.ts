export class G964 {
  public static sumOfDivided(lst: number[]): number[][] {
    let maxNum: number = Math.max.apply(null, lst.map(Math.abs)),
      primes: number[][] = [];
    for (let i = 2; i <= maxNum; i++)
      if (this.isPrime(i)) {
        let divArr = lst.filter((n) => !(n % i)),
          sumOfNums = divArr.reduce((sum, n) => sum + n, 0);
        if (divArr.length) primes.push([i, sumOfNums]);
      }
    return primes;
  }

  private static isPrime(n: number): boolean {
    for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
    return n > 1;
  }
}
