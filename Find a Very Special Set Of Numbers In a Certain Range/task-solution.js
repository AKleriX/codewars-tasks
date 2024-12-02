const findUs = (n1, n2, k, primeFactors, digits) => {
  let result = [],
    rangeEnd = n1 + k * n2;

  for (let num = n1; num <= rangeEnd; num++)
    if (primeFactors.every((factor) => num % factor === 0)) {
      let numDigits = new Set(String(num));
      if (digits.every((d) => numDigits.has(String(d)))) result.push(num);
    }

  return result;
};
