const decode = (str) =>
  [...str]
    .map((c) =>
      /[a-z]/.test(c)
        ? String.fromCharCode(c < 'n' ? 122 - c.charCodeAt(0) + 97 : 97 + 122 - c.charCodeAt(0))
        : c,
    )
    .join('');
