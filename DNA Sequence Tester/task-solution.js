function checkDNA(seq1, seq2) {
  let minLen = Math.min(seq1.length, seq2.length),
    downUpSeq = [...(seq1.length === minLen ? seq1 : seq2)].reverse().join(''),
    upDownSeq = seq1.length === minLen ? seq2 : seq1;
  return upDownSeq.includes(
    downUpSeq.replace(/./g, (nuc) => {
      switch (nuc) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'C':
          return 'G';
        case 'G':
          return 'C';
      }
    }),
  );
}
