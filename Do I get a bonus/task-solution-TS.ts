export class Kata {
  public static bonusTime(salary:number, bonus:boolean):string {
    return `£${bonus ? salary * 10 : salary}`;
  }
}