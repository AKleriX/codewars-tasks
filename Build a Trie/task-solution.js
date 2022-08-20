function buildTrie(...words) {
  let root = {};
  for (let i = 0; i < words.length; i++) {
    let node = root;
    for (let j = 0; j < words[i].length - 1; j++) {
      let char = words[i].slice(0, j + 1);
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    if (!node[words[i]] && words[i].length) node[words[i]] = null;
  }
  return root;
}
