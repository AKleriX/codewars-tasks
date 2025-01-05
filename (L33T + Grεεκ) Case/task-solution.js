const GrεεκL33t = (str) => {
  const mapping = {
    A: 'α',
    B: 'β',
    D: 'δ',
    E: 'ε',
    I: 'ι',
    K: 'κ',
    N: 'η',
    O: 'θ',
    P: 'ρ',
    R: 'π',
    T: 'τ',
    U: 'μ',
    V: 'υ',
    W: 'ω',
    X: 'χ',
    Y: 'γ',
  };

  return str
    .toUpperCase()
    .split('')
    .map((char) => mapping[char] || char.toLowerCase())
    .join('');
};
