const sortIt = (list, n) =>
  list
    .split(', ')
    .sort((a, b) =>
      a[n - 1].toLowerCase() === b[n - 1].toLowerCase()
        ? a.toLowerCase().localeCompare(b.toLowerCase())
        : a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()),
    )
    .join(', ');
