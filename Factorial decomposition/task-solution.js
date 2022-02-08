function decomp(n) {
  let divs = {};
  for (let i = 2; i <= n; i++){
    let num = i,
        j = 2;
    while (num > 1) {
      if (!(num % j)) {
        num /= j;
        divs[j] = divs[j] ? divs[j] + 1 : 1;
      }  
      else j++;  
    }
  }
  return Object.keys(divs).map(div => div + (divs[div] === 1 ? '' : '^' + divs[div])).join(' * ');
}