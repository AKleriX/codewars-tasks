function anagramDifference(w1, w2) {
  let letterCounter1 = Array.from({ length: 26 }, () => 0),
    letterCounter2 = Array.from({ length: 26 }, () => 0),
    counter = 0;
  for (let i = 0; i < w1.length; i++) letterCounter1[w1[i].charCodeAt() - 97]++;
  for (let i = 0; i < w2.length; i++) letterCounter2[w2[i].charCodeAt() - 97]++;
  for (let i = 0; i < 26; i++) counter += Math.abs(letterCounter1[i] - letterCounter2[i]);
  return counter;
}
