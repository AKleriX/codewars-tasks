const validateNumber = (str) =>
  /^(0|\+44)7\d{9}$/.test(str.replace(/-/g, ''))
    ? 'In with a chance'
    : 'Plenty more fish in the sea';
