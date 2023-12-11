const reverseComplement = (dna) =>
  /^[ACGT]*$/.test(dna)
    ? [...dna.replace(/[ACGT]/g, (n) => ({ A: 'T', C: 'G', T: 'A', G: 'C' }[n]))].reverse().join('')
    : 'Invalid sequence';
