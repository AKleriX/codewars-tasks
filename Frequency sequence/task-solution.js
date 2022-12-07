function freqSeq(str, sep) {
  let sCounter = [...str].reduce((c, s) => ((c[s] = (c[s] || 0) + 1), c), {});
  return [...str].map((s) => sCounter[s]).join(sep);
}
