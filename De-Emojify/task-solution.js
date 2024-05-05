const deEmojify = (emojiString) => {
  const dict = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':('];
  return emojiString.length
    ? emojiString
        .split('  ')
        .map((c) =>
          String.fromCharCode(
            +c
              .split(' ')
              .map((s) => dict.indexOf(s))
              .join(''),
          ),
        )
        .join('')
    : '';
};
