const paintLetterboxes = function (start, end) {
  let digitsCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = start; i <= end; i++) {
    let digits = [...i.toString()].map(Number);
    for (let j = 0; j < digits.length; j++) digitsCounter[digits[j]]++;
  }
  return digitsCounter;
};
