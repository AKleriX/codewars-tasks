function isItANum(str) {
  let digits = str.replace(/[^\d]/g, '');
  return /^0(\d){10}$/.test(digits) ? digits : 'Not a phone number';
}
