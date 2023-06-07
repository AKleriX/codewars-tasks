const wdm = (talk) =>
  talk
    .replace(/puke|hiccup/g, '')
    .replace(/\s+/g, ' ')
    .trim();
