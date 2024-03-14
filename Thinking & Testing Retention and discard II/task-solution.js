const testit = (s, n) => [...n.toString(2)].map((d, i) => (d === '1' ? s[i] : '')).join('');
