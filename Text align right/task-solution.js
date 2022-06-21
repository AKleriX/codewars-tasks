function alignRight(text, width) {
  const regExp = new RegExp('(.{1,' + width + '})( |$)', 'g');
  return text.replace(regExp, (_, l) => ' '.repeat(width - l.length) + l + '\n').slice(0, -1);
}
