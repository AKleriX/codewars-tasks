function getCount(n) {
  let strNum = n.toString(),
    counter = 0;
  for (let i = 0; i < strNum.length; i++)
    for (let j = i + 1; j <= strNum.length; j++)
      if (!(n % Number(strNum.slice(i, j))) && Number(strNum.slice(i, j)) !== 0) counter++;
  return counter - 1;
}
