export function vowelShift(text:string|null, n:number):string|null {
    if (!text) return text;
    let vowels: string = text.replace(/[^aieou]/gi, '');
    n = n % vowels.length;
    let newPosVowerls: string = (vowels + vowels).slice(n >= 0 ? vowels.length - n : 0 - n,  n >= 0 ? 2 * vowels.length - n : vowels.length - n),
        pos: number = 0;
    return text.replace(/[aieou]/gi, () => newPosVowerls[pos++]);
  }