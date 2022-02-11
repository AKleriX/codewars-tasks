function dec2FactString(nb) {
  let fact = '',
      iterator = 1;
  while (nb > 0){
    if (nb % iterator > 9) fact = String.fromCharCode(nb % iterator + 65 - 10) + fact;
    else fact = (nb % iterator).toString() + fact;
    nb = Math.trunc(nb / iterator);
    iterator++;
  }
  return fact;
}

function factString2Dec(str) {  
  let num = 0;
  for (let i = 0; i < str.length; i++){
    let n = Number(str[i]);
    if (/[A-Z]/.test(str[i])) n = str[i].charCodeAt(0) - 55;    
    num += n * getFact(str.length - i - 1);
  }
  return num;
}

const getFact = (n) => n > 1 ? n * getFact(n - 1) : 1;