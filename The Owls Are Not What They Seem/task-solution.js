const owlPic = (text) => {
  const pattern = text.replace(/[^8wtyuioahxvm]/gi, '').toUpperCase();
  return pattern + "''0v0''" + [...pattern].reverse().join('');
};
