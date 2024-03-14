// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
const queens = (n) => (n <= 0n ? 0n : (n - 2n) * (n - 1n));
