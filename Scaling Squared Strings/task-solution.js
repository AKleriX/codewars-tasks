const scale = (strng, k, n) =>
  strng
    .split('\n')
    .map((r) => {
      let newRow = [...r].map((l) => l.repeat(k)).join('');
      return Array.from({ length: n }, () => newRow).join('\n');
    })
    .join('\n')
    .trim();
