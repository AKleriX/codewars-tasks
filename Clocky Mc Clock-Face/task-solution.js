const whatTimeIsIt = function(angle) {
    let h = Math.trunc(angle / 30),
        m = Math.trunc(angle % 30 * 2);
    return `${h === 0 ? 12 : (h < 10 ? `0${h}` : h)}:${m < 10 ? `0${m}` : m}`;
  }