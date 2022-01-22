const splitInteger = (num, parts) =>{
  let resArr = new Array(parts).fill(Math.trunc(num / parts)),
      rem = num % parts;
  for (let i = 1; i <= rem; i++)
    resArr[parts - i] += 1;
  return resArr;
}