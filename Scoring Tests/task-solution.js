function scoreTest(str, ...score) {
  let counters = [0, 0, 0];
  for (let i = 0; i < str.length; i++) counters[str[i]]++;
  return counters[0] * score[0] + counters[1] * score[1] - counters[2] * score[2];
}
