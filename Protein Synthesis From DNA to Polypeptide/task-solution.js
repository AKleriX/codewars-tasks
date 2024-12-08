const proteinSynthesis = (dna) => {
  const codonDict = {
      GCU: 'Ala',
      GCC: 'Ala',
      GCA: 'Ala',
      GCG: 'Ala',
      UUA: 'Leu',
      UUG: 'Leu',
      CUU: 'Leu',
      CUC: 'Leu',
      CUA: 'Leu',
      CUG: 'Leu',
      CGU: 'Arg',
      CGC: 'Arg',
      CGA: 'Arg',
      CGG: 'Arg',
      AGA: 'Arg',
      AGG: 'Arg',
      AAA: 'Lys',
      AAG: 'Lys',
      AAU: 'Asn',
      AAC: 'Asn',
      AUG: 'Met',
      GAU: 'Asp',
      GAC: 'Asp',
      UUU: 'Phe',
      UUC: 'Phe',
      UGU: 'Cys',
      UGC: 'Cys',
      CCU: 'Pro',
      CCC: 'Pro',
      CCA: 'Pro',
      CCG: 'Pro',
      CAA: 'Gln',
      CAG: 'Gln',
      UCU: 'Ser',
      UCC: 'Ser',
      UCA: 'Ser',
      UCG: 'Ser',
      AGU: 'Ser',
      AGC: 'Ser',
      GAA: 'Glu',
      GAG: 'Glu',
      ACU: 'Thr',
      ACC: 'Thr',
      ACA: 'Thr',
      ACG: 'Thr',
      GGU: 'Gly',
      GGC: 'Gly',
      GGA: 'Gly',
      GGG: 'Gly',
      UGG: 'Trp',
      CAU: 'His',
      CAC: 'His',
      UAU: 'Tyr',
      UAC: 'Tyr',
      AUU: 'Ile',
      AUC: 'Ile',
      AUA: 'Ile',
      GUU: 'Val',
      GUC: 'Val',
      GUA: 'Val',
      GUG: 'Val',
      UAG: 'Stop',
      UGA: 'Stop',
      UAA: 'Stop',
    },
    transcribe = { A: 'U', C: 'G', G: 'C', T: 'A' },
    rna = dna
      .split('')
      .map((base) => transcribe[base] || '')
      .join(''),
    codons = rna.match(/.{1,3}/g) || [],
    aminoAcids = codons.map((codon) => codonDict[codon]).filter(Boolean);
  return [codons.join(' '), aminoAcids.join(' ')];
};
