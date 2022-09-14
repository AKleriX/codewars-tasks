function truthTable(booleanFunction) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    argsCount = booleanFunction.length,
    args = [...abc.slice(0, argsCount)],
    table = [
      args.join(' ') + '\t\t' + (booleanFunction.name || 'f') + '(' + args.join(',') + ')' + '\n',
    ];
  for (let i = 0; i < 2 ** argsCount; i++) {
    let a = [...addZero(i.toString(2), argsCount)].map((d) => +d);
    table.push(a.join(' ') + '\t\t' + +booleanFunction(...a));
  }
  return table.join('\n') + '\n';
}

const addZero = (n, c) => (n.length < c ? '0'.repeat(c - n.length) + n : n);
