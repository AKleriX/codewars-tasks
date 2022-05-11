function findTheKey(messages, secrets) {
  let key = {};
  for (let i = 0; i < messages.length; i++)
    for (let j = 0; j < messages[i].length; j++)
      if (messages[i][j] !== secrets[i][j]) {
        let firstLetter = messages[i][j] < secrets[i][j] ? messages[i][j] : secrets[i][j],
          secondLetter = messages[i][j] > secrets[i][j] ? messages[i][j] : secrets[i][j];
        key[firstLetter] = secondLetter;
      }
  return Object.keys(key)
    .sort()
    .map((l) => l + key[l])
    .join('');
}
