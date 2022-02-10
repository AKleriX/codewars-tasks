function Dictionary(words) {
  this.words = [...words];
}

Dictionary.prototype.findMostSimilar = function(term) {
  const levenshtein = (word) => {
    if (word === term) return 0;
    if (!term.length || !word.length) return Math.max(word.length, term.length);
    let a0 = new Array(term.length + 1),
        a1 = new Array(term.length + 1);
    for (let i = 0; i < a0.length; i++) a0[i] = i;
    for (let i = 0; i < word.length; i++){
      a1[0] = i + 1;
      for (let j = 0; j < term.length; j++){
        let dist = word[i] === term[j] ? 0 : 1;
        a1[j + 1] = Math.min(a1[j] + 1, a0[j + 1] + 1, a0[j] + dist);
      }
      [a0, a1] = [a1, a0];
    }
    return a0[term.length];
  }
  return this.words.sort((a, b) => levenshtein(a) - levenshtein(b))[0];
}