function hasSubpattern(string) {
  let counter = {};
  for (let i = 0; i < string.length; i++) counter[string[i]] = (counter[string[i]] || 0) + 1;
  return Object.values(counter).reduce((a, b) => gcd(a, b)) > 1;
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
