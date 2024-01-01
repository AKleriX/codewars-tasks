const codeForSameProtein = (seq1, seq2) =>
  seq1.replace(/.{3}/g, (t) => codons[t]) === seq2.replace(/.{3}/g, (t) => codons[t]);
