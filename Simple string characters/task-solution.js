function solve(s) {
  let counter = [0, 0, 0, 0];
  for (let i = 0; i < s.length; i++)
    if (/[A-Z]/.test(s[i])) counter[0]++;
    else if (/[a-z]/.test(s[i])) counter[1]++;
    else if (/\d/.test(s[i])) counter[2]++;
    else counter[3]++;
  return counter;
}
