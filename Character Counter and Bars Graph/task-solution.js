function countCharsBarGraph(text, maxw) {
  let letterCounter = [...text.toLowerCase().replace(/[^a-z]/g, '')].reduce(
      (c, l) => ((c[l] = c[l] ? c[l] + 1 : 1), c),
      {},
    ),
    sortLetters = Object.keys(letterCounter).sort((a, b) =>
      letterCounter[a] === letterCounter[b]
        ? a.localeCompare(b)
        : letterCounter[b] - letterCounter[a],
    ),
    resCounter = [];
  for (let i = 0; i < sortLetters.length; i++)
    resCounter.push(
      `${sortLetters[i]}:${'#'.repeat(
        ((letterCounter[sortLetters[i]] / letterCounter[sortLetters[0]]) * maxw) | 0,
      )}`,
    );
  return resCounter.join('\n');
}
