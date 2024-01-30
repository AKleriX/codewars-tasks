const tenGreenBottles = (n) => {
  const dict = [
      'no',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
    ],
    res = [];
  for (let i = n; i > 0; i--)
    res.push(
      `${dict[i]} green bottle${i === 1 ? '' : 's'} hanging on the wall,\n${dict[i]} green bottle${
        i === 1 ? '' : 's'
      } hanging on the wall,\n${
        i === 1 ? 'If that' : 'And if'
      } one green bottle should accidentally fall,\nThere'll be ${dict[
        i - 1
      ].toLowerCase()} green bottle${i === 2 ? '' : 's'} hanging on the wall.\n`,
    );
  return res.join('\n');
};
