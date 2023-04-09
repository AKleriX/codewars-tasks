obfuscate = function (email) {
  const symbols = {
    '.': ' [dot] ',
    '@': ' [at] ',
  };
  return email.replace(/[.@]/g, (s) => symbols[s]);
};
