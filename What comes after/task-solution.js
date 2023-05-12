const comes_after = (str, l) => (str.match(new RegExp('(?<=' + l + ')[a-z]', 'gi')) || []).join('');
