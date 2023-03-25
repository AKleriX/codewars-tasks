const timedReading = (maxLength, text) =>
  text
    .replace(/[^\w ]/g, '')
    .split(' ')
    .filter((w) => w.length <= maxLength && w.length).length;
