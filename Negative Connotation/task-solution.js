function connotation(str) {
  let words = str.trim().split(/\s+/g),
    counter = 0;
  for (let i = 0; i < words.length; i++)
    if (/[a-m]/i.test(words[i][0])) counter++;
    else counter--;
  return counter >= 0;
}
