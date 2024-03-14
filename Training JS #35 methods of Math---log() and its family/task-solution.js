const thinkingAndTesting = (number, base) =>
  number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
