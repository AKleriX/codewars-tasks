export class G964 {
  
  public static mxdiflg = (a1: string[], a2: string[]): number => {
    if (!a1.length || !a2.length) return -1;
    let a1SortLength: number[] = a1.map(s => s.length).sort((a, b) => a - b),
        a2SortLength: number[] = a2.map(s => s.length).sort((a, b) => a - b);
    return Math.max(Math.abs(a1SortLength[0] - a2SortLength[0]), Math.abs(a1SortLength[a1SortLength.length - 1] - a2SortLength[0]),
                   Math.abs(a1SortLength[0] - a2SortLength[a2SortLength.length - 1]), 
                    Math.abs(a1SortLength[a1SortLength.length - 1] - a2SortLength[a2SortLength.length - 1]));
  }
}