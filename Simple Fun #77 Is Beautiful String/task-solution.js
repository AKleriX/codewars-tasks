const isBeautifulString = (s) => {
  const counts = Array(26).fill(0);
  for (const char of s) counts[char.charCodeAt(0) - 97]++;
  for (let i = 1; i < 26; i++) if (counts[i] > counts[i - 1]) return false;
  return true;
};
