export class G964 {
  public static going(n: number): number {
    let res: number = 1,
        acc: number = 1;
    for (let i = n; i > 1; i--){
      acc /= i;
      res += acc;
    }  
    return Number(res.toString().substring(0, 8));
  }
}