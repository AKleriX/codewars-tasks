export function decomp(n: number): string {
  let divs: {[index: number]: number} = {},
      arrayDivs: string[] = [];
  for (let i = 2; i <= n; i++){
    let num: number = i,
        j: number = 2;
    while (num > 1){
      if (!(num % j)){
        num /= j;
        divs[j] = divs.hasOwnProperty(j) ? divs[j] + 1 : 1; 
      } else j++;
    }
  }
  for (let div in divs)
    arrayDivs.push(div.toString() + (divs[div] === 1 ? '' : '^' + divs[div].toString()));
  return arrayDivs.join(' * ');
}