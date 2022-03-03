function wordsToHex(words) {
  return words.split(' ').map(word => {
    let s1 = word[0] ? word[0].charCodeAt().toString(16) : '00',
        s2 = word[1] ? word[1].charCodeAt().toString(16) : '00',
        s3 = word[2] ? word[2].charCodeAt().toString(16) : '00';
    return `#${s1.length < 2 ? '0' + s1 : s1}${s2.length < 2 ? '0' + s2 : s2}${s3.length < 2 ? '0' + s3 : s3}`;
  });
}