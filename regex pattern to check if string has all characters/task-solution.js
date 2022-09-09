function regexContainsAll(str) {
  return [...str].map((s) => `(?=[^ ]*${s})`).join('');
}
