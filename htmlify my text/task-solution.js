const htmlify = (string) => {
  const dict = {
    '–': '&ndash;',
    '’': '&rsquo;',
    '&': '&amp;',
    '“': '&ldquo;',
    '”': '&rdquo;',
  };
  return `<p>` + string.replace(/[–’&“”]/g, (p) => dict[p]) + '</p>';
};
