const isMatching = (string, str1, str2) => {
  let sortedStr = [...string.replace(/\s/g, '').toLowerCase()].sort(),
    letters = [...(str1 + str2).replace(/\s/g, '').toLowerCase()].sort();
  return letters.join('') === sortedStr.join('');
};
