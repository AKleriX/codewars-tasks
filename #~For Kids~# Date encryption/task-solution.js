const translateDate = (dateStr) =>
  dateStr
    .split('-')
    .map((n, i) =>
      !i
        ? String.fromCharCode(+n.slice(0, 2) + 50) + String.fromCharCode(+n.slice(-2) + 50)
        : String.fromCharCode(+n + 50),
    )
    .join('-');
