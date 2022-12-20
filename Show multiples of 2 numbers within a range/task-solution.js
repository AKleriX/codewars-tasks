function multiples(s1, s2, s3) {
  let resArr = [];
  for (let i = s1; i < s3; i += s1) if (!(i % s2)) resArr.push(i);
  return resArr;
}
