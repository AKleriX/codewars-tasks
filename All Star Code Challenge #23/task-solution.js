function scoring(array) {
  let scores = [];
  for (let i = 0; i < array.length; i++)
    scores.push([
      array[i].name,
      array[i].normKill * 100 +
        array[i].assist * 50 +
        array[i].damage * 0.5 +
        array[i].healing +
        2 ** array[i].streak +
        array[i].envKill * 500,
      i,
    ]);
  return scores.sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : b[1] - a[1])).map((p) => p[0]);
}
