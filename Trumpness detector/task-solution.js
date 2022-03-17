function trumpDetector(trumpySpeech) {
  let vowels = trumpySpeech.match(/([aeiou])\1*/gi) || [],
    vowelsRepeatCounter = vowels.reduce((sum, v) => sum + (v.length > 1 ? v.length - 1 : 0), 0);
  return Math.round((vowelsRepeatCounter / vowels.length) * 100) / 100;
}
