function scrollingText(text) {
  let dubWord = (text + text).toUpperCase(),
    arr = [];
  for (let i = 0; i < text.length; i++) arr.push(dubWord.slice(i, i + text.length));
  return arr;
}
