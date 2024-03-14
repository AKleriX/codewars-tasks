const translateDate = (dateStr) =>
  `${[...dateStr.slice(0, 2)].map(convert).join('')}-${convert(dateStr.slice(3, 4))}-${convert(
    dateStr.slice(5),
  )}`;

const convert = (s) => ('0' + (s.charCodeAt(0) - 50).toString()).slice(-2);
