export class G964 {  
  
  private static getFact = (n: number): number => n > 1 ? n * G964.getFact(n - 1) : 1;

  public static dec2FactString = (nb: number): string => {
    let fact: string = '',
        iterator: number = 1;
    while (nb > 0){
      if (nb % iterator > 9) fact = String.fromCharCode(nb % iterator + 65 - 10) + fact;
      else fact = (nb % iterator).toString() + fact;
      nb = Math.trunc(nb / iterator);
      iterator++;
    }
    return fact;
  }
  
  public static factString2Dec = (str: string): number => {
    let num: number = 0;
    for (let i = 0; i < str.length; i++){
      let n: number  = /[A-Z]/.test(str[i]) ? str[i].charCodeAt(0) - 55 : Number(str[i]);    
      num += n * G964.getFact(str.length - i - 1);
    }
    return num;
  }

}