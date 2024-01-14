const decipher = (codedMessage) =>
  [...codedMessage]
    .map((c) =>
      /[a-z]/i.test(c)
        ? String.fromCharCode(
            ((c.charCodeAt(0) - (c.toUpperCase() === c ? 65 : 97) + 7) % 26) +
              (c.toUpperCase() === c ? 65 : 97),
          )
        : c,
    )
    .join('');
