const hasScored = (s) => {
  let hitsCounter = 0,
    balls = [];
  for (let i = 0; i < s.length; i++)
    if (/[WRY]/.test(s[i])) {
      if (!balls.length) balls.push(s[i]);
      else if (!balls.includes(s[i]) && hitsCounter > 2) return true;
      else if (!balls.includes(s[i])) return false;
    } else hitsCounter++;
  return false;
};
