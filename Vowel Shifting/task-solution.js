function vowelShift(text, n) {
    if (!text) return text;
    let vowels = text.replace(/[^aieou]/gi, '');
    n = n % vowels.length;
    let newPosVowerls = (vowels + vowels).slice(n >= 0 ? vowels.length - n : 0 - n,  n >= 0 ? 2 * vowels.length - n : vowels.length - n),
        pos = 0;
    return text.replace(/[aieou]/gi, () => newPosVowerls[pos++]);
  }