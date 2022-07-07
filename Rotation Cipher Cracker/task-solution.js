function decode(msg, contents) {
  let decoded = [],
    counter = 0;
  while (counter < 26) {
    let newMsg = [...msg]
      .map((l) => String.fromCharCode(((l.charCodeAt() - 97 + counter) % 26) + 97))
      .join('');
    if (newMsg.includes(contents)) decoded.push(newMsg);
    counter++;
  }
  return decoded.sort();
}
