function planeSeat(a) {
  let nums = +a.slice(0, -1),
    letter = a.slice(-1),
    seatNum = nums < 21 ? 'Front' : nums < 41 ? 'Middle' : nums < 61 ? 'Back' : null,
    seatLetter = /[A-C]/.test(letter)
      ? 'Left'
      : /[D-F]/.test(letter)
      ? 'Middle'
      : /[GHK]/.test(letter)
      ? 'Right'
      : null;
  return !seatNum || !seatLetter ? 'No Seat!!' : `${seatNum}-${seatLetter}`;
}
