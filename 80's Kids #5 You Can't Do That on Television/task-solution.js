function bucketOf(str) {
  let newStr = str.replace(/(\bwas\b)|(\bwat\b)/gi, '');
  if (
    (/wa/i.test(newStr) || /wet/i.test(newStr)) &&
    (/i don't know/i.test(newStr) || /slime/i.test(newStr))
  )
    return 'sludge';
  else if (/wa/i.test(newStr) || /wet/i.test(newStr)) return 'water';
  else if (/i don't know/i.test(newStr) || /slime/i.test(newStr)) return 'slime';
  return 'air';
}
