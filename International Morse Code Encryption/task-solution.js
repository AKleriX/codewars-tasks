const encryption = (message) =>
  message
    .split(' ')
    .map((w) =>
      w
        .split('')
        .map((s) => CHAR_TO_MORSE[s])
        .join(' '),
    )
    .join('   ');
