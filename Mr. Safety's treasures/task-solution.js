function unlock(str){
  const uncode = {
    ['abc']: '2',
    ['def']: '3',
    ['ghi']: '4',
    ['jkl']: '5',
    ['mno']: '6',
    ['pqrs']: '7',
    ['tuv']: '8',
    ['wxyz']: '9',
  }
  let res = '';
 for (let i = 0; i < str.length; i++)
   for (let key in uncode)
     if (key.includes(str[i].toLowerCase())){
       res += uncode[key];
       break;
     }    
 return res;  
}