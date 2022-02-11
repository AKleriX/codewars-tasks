export function findUniq(arr: string[]): string {
  let lowerArr: string[] = arr.map(w => w.toLowerCase()),
      unWord: string = arr[0];
  
  for (let i = 1; i < arr.length; i++){
    let l1: string = Array.from(new Set(lowerArr[i - 1])).sort().join(''),
        l2: string = Array.from(new Set(lowerArr[i])).sort().join('');
    if (l1 !== l2){
      if (i === arr.length - 1) unWord = arr[i];
      else {
        let l3: string = Array.from(new Set(lowerArr[i + 1])).sort().join('');
        if (l1 !== l3) unWord = arr[i - 1];
        else unWord = arr[i];
        break;
      }
    }
  }
  
  return unWord;
}