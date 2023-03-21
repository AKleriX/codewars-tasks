const letterCheck = (arr) =>
  [...arr[1]].every((s) => arr[0].includes(s.toLowerCase()) || arr[0].includes(s.toUpperCase()));
