function evenAndOdd(num) {
  let ne = '',
    no = '',
    strNum = num.toString();
  for (let i = 0; i < strNum.length; i++)
    if (+strNum[i] % 2) no += strNum[i];
    else ne += strNum[i];
  return [ne.length ? +ne : 0, no.length ? +no : 0];
}
