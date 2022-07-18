function combineStrings() {
  let str = '',
    maxLength = Math.max.apply(
      null,
      [...arguments].map((s) => s.length),
    );
  for (let i = 0; i < maxLength; i++)
    for (let j = 0; j < arguments.length; j++) str += arguments[j][i] ? arguments[j][i] : '';
  return str;
}
