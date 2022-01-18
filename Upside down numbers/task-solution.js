function solve(x, y) {
  let rotNumsCounter = 0;
  for (let i = x; i < y; i++)
    if (getRotNum(i) === i) rotNumsCounter++;
  return rotNumsCounter;  
}

const getRotNum = (num) => {
  if (/[2-57]+/.test(num.toString())) return 'No rotation number';
  return Number(num.toString().replace(/(6|9)/g, m => m === '6' ? '9' : '6').split('').reverse().join(''));
}