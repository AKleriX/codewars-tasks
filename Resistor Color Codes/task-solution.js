function decodeResistorColors(bands) {
  const bandsDic = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white',
  ];
  let vals = bands
    .split(' ')
    .reduce(
      (v, b, i) => (
        i < 2
          ? (v[0] += bandsDic.indexOf(b))
          : i === 2
          ? (v[0] = +v[0] * 10 ** bandsDic.indexOf(b))
          : (v[1] = b === 'gold' ? 5 : 10),
        v
      ),
      ['', 20],
    );
  return `${
    vals[0] < 1000 ? vals[0] : vals[0] < 1000000 ? vals[0] / 1000 + 'k' : vals[0] / 1000000 + 'M'
  } ohms, ${vals[1]}%`;
}
