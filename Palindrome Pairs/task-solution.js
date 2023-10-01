const palindromePairs = (words) => {
  const res = [];
  for (let i = 0; i < words.length; i++)
    for (let j = 0; j < words.length; j++)
      if (
        i !== j &&
        [...(words[i] + '')].concat([...(words[j] + '')]).join('') ===
          [...(words[i] + '')]
            .concat([...(words[j] + '')])
            .reverse()
            .join('')
      )
        res.push([i, j]);
  return res;
};
