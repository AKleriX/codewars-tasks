function makeValley(arr) {
  let sortArr = [...arr].sort((a, b) => b - a),
    leftWing = [],
    rightWing = [];
  for (let i = 0; i < sortArr.length; i++)
    if (i % 2) rightWing.push(sortArr[i]);
    else leftWing.push(sortArr[i]);
  return [...leftWing, ...rightWing.reverse()];
}
