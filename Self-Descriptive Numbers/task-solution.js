const selfDescriptive = (n) => {
  const counter = [...n.toString()].reduce((c, d) => ((c[d] = (c[d] || 0) + 1), c), {});
  return [...n.toString()].every((d, i) => counter[i] === +d || (!+d && !counter[i]));
};
