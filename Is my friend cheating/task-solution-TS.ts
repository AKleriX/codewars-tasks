export class G964 {
  public static removeNb (n: number): number[][] {
    let sumNums: number = n * (1 + n) / 2,
        resArr: number[][] = [];
    for (let i = 1; i <= n; i++){
      let tempNum: number = (sumNums - i) / (i + 1);
      if (!(tempNum % 1) && (tempNum <= n))
        resArr.push([i, tempNum]);
    }
    return resArr;
  }
}