function isDivisibleBy6(s) {
  if (/\d/.test(s[s.length - 1])  && Number(s[s.length - 1]) % 2) return [];
  let starIndex = s.indexOf('*'),  
      numsSum = s.length > 1 ? [...(s.slice(0, starIndex) + s.slice(starIndex + 1))].reduce((sum, n) => Number(sum) + Number(n)) : 0,
      divs = [];
  for (let i = 0; i < 10; i++)
    if (isDiv3(numsSum, i) && (starIndex !== s.length - 1 || isDiv2(i)))
      divs.push(s.slice(0, starIndex) + i + s.slice(starIndex + 1));
  return divs;
}

const isDiv3 = (sum, n) => !((sum + n) % 3);
const isDiv2 = (n) => !(n % 2);