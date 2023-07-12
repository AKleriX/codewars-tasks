const hidePasswordFromConnection = (urlString) =>
  urlString.replace(/(?<=password=)[^&]*(?=&|$)/, (p) => '*'.repeat(p.length));
