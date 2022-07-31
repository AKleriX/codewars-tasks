function getCountedNucleotides(genCode) {
  let counter = { A: 0, C: 0, G: 0, T: 0 };
  for (let i = 0; i < genCode.length; i++) counter[genCode[i].toUpperCase()]++;
  return counter;
}
