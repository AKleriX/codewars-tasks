export class G964 {

  public static primeFactors = (n: number): string => {
    let resPrime: string = '';
    for (let i = 2; i <= n; i++){
      let counter = 0;
      while (!(n % i)){
        counter++;
        n /= i;
      }
      if (counter) resPrime += `(${i}${counter > 1 ? '**' + counter : ''})`;
    }
    return resPrime;
  }
}