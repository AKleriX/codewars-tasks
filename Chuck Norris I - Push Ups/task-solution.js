const chuckPushUps = (string) => {
  if (typeof string !== 'string' || !string.length) return 'FAIL!!';
  let words = string.split(' '),
    nums = [];
  for (let i = 0; i < words.length; i++)
    nums.push(parseInt(words[i].replace(/[^01]/g, '') || 0, 2));
  return /[01]/.test(string) ? Math.max(...nums) : 'CHUCK SMASH!!';
};
