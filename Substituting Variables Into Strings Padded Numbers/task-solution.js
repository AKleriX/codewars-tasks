const solution = (val) => `Value is ${addZero(val.toString())}`;

const addZero = (n) => (n.length < 5 ? '0'.repeat(5 - n.length) + n : n);
