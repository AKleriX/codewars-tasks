const prediction = (angleATron, leafNo) => {
  let res = {},
    currentAngle = 0;
  for (let i = 1; i <= leafNo; i++) {
    res[`leaf ${i}`] = `${currentAngle.toFixed(1)} degrees`;
    currentAngle = currentAngle + angleATron;
    currentAngle %= 360;
  }
  return res;
};
