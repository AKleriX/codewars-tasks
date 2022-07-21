function disjunction(operands, isExclusive) {
  return operands.reduce((c, o) => (isExclusive ? c !== o : c || o));
}
