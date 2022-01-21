export class G964 {

  public static isSumOfCubes = (s: string): string => {
    let allCubicNums: string[] = (s.match(/\d{1,3}/g) || [])
                                   .filter((n: string): boolean => {
                                     return Number(n) === n.split('').reduce((cubicSum: number, d: string): number => {
                                                                                return cubicSum + Number(d)**3
                                                                              }, 0);
                                     });
    return allCubicNums.length ? `${allCubicNums.map(Number).join(' ')} ${allCubicNums.reduce((sum: number, n: string): number => {
                                                                                                return Number(n) + sum
                                                                                               }, 0)} Lucky` : `Unlucky`;
  }
  
}