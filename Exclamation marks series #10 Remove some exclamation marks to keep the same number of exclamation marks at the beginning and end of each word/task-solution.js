function remove(s) {
  return s
    .split(' ')
    .map((w) => {
      let startEx = w.match(/^!+/) ? w.match(/^!+/)[0].length : 0,
        endEx = w.match(/!+$/) ? w.match(/!+$/)[0].length : 0,
        word = w.replace(/(^!+)|(!+$)/g, '');
      return '!'.repeat(Math.min(startEx, endEx)) + word + '!'.repeat(Math.min(startEx, endEx));
    })
    .join(' ');
}
