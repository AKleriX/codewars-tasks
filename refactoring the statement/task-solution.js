// return a meaning full string without numbers.
const refactoryString = (str) => str.replace(/\d+/g, (n) => String.fromCharCode(+n + 97));
