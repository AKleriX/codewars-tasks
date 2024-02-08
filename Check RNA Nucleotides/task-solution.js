const checkNucleotides = (seq) => {
  const invLet = seq.match(/[^ACGU]/);
  return invLet
    ? `There is an invalid letter: ${invLet[0]}. At position: ${invLet.index + 1}`
    : `Valid Sequence: ${seq}`;
};
