function solution(date) {
  let strDate = date.toLocaleDateString('en-US').replace(/\//g, ''),
    sum = +strDate[0];
  for (let i = 1; i < strDate.length; i++) {
    sum += Number(strDate[i]);
    if (sum > 9) sum = [...sum.toString()].reduce((s, d) => s + +d, 0);
  }
  return sum;
}
