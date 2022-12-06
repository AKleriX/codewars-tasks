const unusedDigits = (...nums) =>
  nums.reduce((d, n) => d.replace(new RegExp('[' + n + ']', 'g'), ''), '0123456789');
