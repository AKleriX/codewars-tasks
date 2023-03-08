function missingWord(nums, str) {
  let noSpaces = str.replace(/\s/g, ''),
    sortNums = [...nums].sort((a, b) => a - b),
    word = '';
  for (let i = 0; i < sortNums.length; i++)
    if (sortNums[i] < 0 || sortNums[i] >= noSpaces.length) return 'No mission today';
    else word += noSpaces[sortNums[i]];
  return word.toLowerCase();
}
