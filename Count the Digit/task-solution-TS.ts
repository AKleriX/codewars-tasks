export class G964 {
  public static nbDig(n: number, d: number): number {
    let dCounter: number = 0;
    for (let k: number = 0; k <= n; k++)
      dCounter += (k**2).toString().split('')
        .reduce((counter: number, digit: string): number => d.toString() === digit ? ++counter : counter, 0);
    return dCounter;
  }
}