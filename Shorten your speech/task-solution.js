const shortenSpeech = (str) => {
  const words = str.split(' ');
  return words
    .map((w) =>
      w.length > 3 && w.slice(3).search(/[aeoui]/) > -1
        ? w.slice(0, 3 + w.slice(3).search(/[aeoui]/)) + '.'
        : w,
    )
    .join(' ');
};
