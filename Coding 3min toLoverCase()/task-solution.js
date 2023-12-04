String.prototype.toLoverCase = function () {
  return [...this]
    .map((s) => (/\w/.test(s) ? 'LOVE'[(s.toLowerCase().charCodeAt() - 97) % 4] : s))
    .join('');
};
