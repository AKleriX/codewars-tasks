function checkValidTrNumber(n) {
  let strNum = n.toString();
  return (
    /^[1-9]\d{10}$/.test(strNum) &&
    ((+strNum[0] + +strNum[2] + +strNum[4] + +strNum[6] + +strNum[8]) * 7 -
      (+strNum[1] + +strNum[3] + +strNum[5] + +strNum[7])) %
      10 ===
      +strNum[9] &&
    [...strNum].slice(0, -1).reduce((s, d) => s + +d, 0) % 10 === +strNum[10]
  );
}
